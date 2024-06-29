import React,{useState} from 'react';
import Card from 'react-bootstrap/Card';
import DOMPurify from 'dompurify';
import parse from 'html-react-parser';
import JobDetails from './JobDetails';
import { Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import Applicants from './Applicants';

function CreatedJobs({myCompany}) {

  const [open, setOpen] = useState(null);
  const [show, setShow] = useState(false);
  const [fullscreen, setFullscreen] = useState(true);

  const handleToggle = (id) => {
    setOpen(open === id ? null : id);
  };


  function handleShow(breakpoint) {
    setFullscreen(breakpoint);
    setShow(true);
  }

// console.log(myCompany);

  function handleDelete(post_id) {
    fetch(`/posts/${post_id}`, {
        method: 'DELETE'
    })
  }

    // console.log(myCompany.posts);
    const posted = myCompany.posts.map((post) => {
        return (
            <Card key={post.id} className={`col-lg-6 col-md-6 m-3  ${open === post.id ? "border border-danger" : ''}`}>
            <Card.Body>
                {/* <Card.Title className='text-decoration-underline' style={{cursor: "pointer"}}>{post.title}</Card.Title> */}
                
                <JobDetails post={post} onToggle={() => handleToggle(post.id)} isOpen={open === post.id}/>

                <Card.Subtitle className="mb-2 text-muted">{post.department}</Card.Subtitle>
                <div>
                  {parse(DOMPurify.sanitize(post.jobDescription.slice(0, 300)+'...'))}
                </div>

                {/* <Button as={Link} to={{pathname: '/applicants', state: {post}}} variant='outline-primary' className='m-1'>See Applicants</Button> */}
                <Applicants myCompany={myCompany} post={post} show={show} setShow={setShow} fullscreen={fullscreen} onHandleShow={handleShow}/>

                <Button onClick={() => handleDelete(post.id)} variant='outline-danger' className='m-1 delete-button'>
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="red" className="bi bi-trash3 delete-icon" viewBox="0 0 16 16">
                    <path d="M6.5 1h3a.5.5 0 0 1 .5.5v1H6v-1a.5.5 0 0 1 .5-.5M11 2.5v-1A1.5 1.5 0 0 0 9.5 0h-3A1.5 1.5 0 0 0 5 1.5v1H1.5a.5.5 0 0 0 0 1h.538l.853 10.66A2 2 0 0 0 4.885 16h6.23a2 2 0 0 0 1.994-1.84l.853-10.66h.538a.5.5 0 0 0 0-1zm1.958 1-.846 10.58a1 1 0 0 1-.997.92h-6.23a1 1 0 0 1-.997-.92L3.042 3.5zm-7.487 1a.5.5 0 0 1 .528.47l.5 8.5a.5.5 0 0 1-.998.06L5 5.03a.5.5 0 0 1 .47-.53Zm5.058 0a.5.5 0 0 1 .47.53l-.5 8.5a.5.5 0 1 1-.998-.06l.5-8.5a.5.5 0 0 1 .528-.47M8 4.5a.5.5 0 0 1 .5.5v8.5a.5.5 0 0 1-1 0V5a.5.5 0 0 1 .5-.5"/>
                  </svg>
                </Button>
            </Card.Body>
            </Card>
        )
    })
    
  return (
    <>
        <h4 className='m-3'>CREATED JOBS</h4>
        {posted}
    </>
  );
}

export default CreatedJobs;