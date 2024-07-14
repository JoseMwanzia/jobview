import React,{useState} from 'react';
import Card from 'react-bootstrap/Card';
import DOMPurify from 'dompurify';
import parse from 'html-react-parser';
import JobDetails from './JobDetails';
import { Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import Applicants from './Applicants';
import ConfrimationPop from './ConfirmationPop';

function CreatedJobs({myCompany}) {

  const [open, setOpen] = useState(null);
  const [show, setShow] = useState(false);
  const [fullscreen, setFullscreen] = useState(true);
  const [close, setClose] = useState(false);

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
    .then((res) => {
      if (res.ok) {
        setClose(true)
      }
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

                <ConfrimationPop handledelete={()=>handleDelete(post.id)} close={close}/>
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