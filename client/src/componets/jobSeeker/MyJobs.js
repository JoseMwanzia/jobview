import React, {useState} from 'react'
import Navigation from './Navigation';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import DOMPurify from 'dompurify';
import parse from 'html-react-parser';
import AppliedJobs from './AppliedJobs';


function MyJobs({ jobSeeker, companyUser}) {

    const [open, setOpen] = useState(null);

    const handleToggle = (id) => {
        setOpen(open === id ? null : id);
    };

    if (jobSeeker.posts === undefined) {
        return "Loading Posts..."
    }

    // console.log(companyUser)
    
  return (
    <>
        <Navigation jobSeeker={jobSeeker}/>

        {jobSeeker.posts.map((post) => {
            return (
            <Card key={post.id} className={`col-lg-5 col-md-5 m-3 ${open === post.id ? "border-2 border-primary" : ''}`}>
                <Card.Header as='h5'></Card.Header>
                <Card.Body>
                    <AppliedJobs isOpen={open === post.id} onToggle={() => handleToggle(post.id)} post={post} />
                    <div>
                        {parse(DOMPurify.sanitize(post.jobDescription.slice(0, 200)+'...')) }
                    </div>
                </Card.Body>
            </Card>
            )
        })}
        
    </>
  )
}

export default MyJobs