import React from 'react';
import Collapse from 'react-bootstrap/Collapse';
import DOMPurify from 'dompurify';
import parse from 'html-react-parser';
import { formatDistanceToNow, parseISO } from 'date-fns';
import Button from 'react-bootstrap/Button';


function AppliedJobs({post,isOpen, onToggle, company}) {
// console.log(company);
    
  return (
    <section >

      <h5
        onClick={onToggle} // runs the code " () => handleToggle(post.id) "
        aria-controls='example-collapse-text'
        aria-expanded={isOpen}
        className='title text-dark text-decoration-underline'
      >
        {post.title}
     </h5>
      <Collapse in={isOpen}>

        <div  className='collapse-panel rounded-1 p-3 col-lg-5 col-md-6 position-fixed end-0 z-2 overflow-auto border text-start'>

          <button onClick={onToggle} type="button" className="btn-close" aria-label="Close"></button><hr style={{ height: '3px',  backgroundColor: 'gray' }}/>
          
          <h1 className='text-decoration-underline d-inline'>{post.title}</h1>
          {/* <h5 id='example-collapse-text'>at {company.company_name}</h5> */}
          {/* <svg xmlns="http://www.w3.org/2000/svg" width="10" height="10" fill="currentColor" className="d-inline bi bi-box-arrow-up-right" viewBox="0 0 16 16">
            <path fillRule="evenodd" d="M8.636 3.5a.5.5 0 0 0-.5-.5H1.5A1.5 1.5 0 0 0 0 4.5v10A1.5 1.5 0 0 0 1.5 16h10a1.5 1.5 0 0 0 1.5-1.5V7.864a.5.5 0 0 0-1 0V14.5a.5.5 0 0 1-.5.5h-10a.5.5 0 0 1-.5-.5v-10a.5.5 0 0 1 .5-.5h6.636a.5.5 0 0 0 .5-.5"/>
            <path fillRule="evenodd" d="M16 .5a.5.5 0 0 0-.5-.5h-5a.5.5 0 0 0 0 1h3.793L6.146 9.146a.5.5 0 1 0 .708.708L15 1.707V5.5a.5.5 0 0 0 1 0z"/>
          </svg> */}
          <br/>
          
          <h3 id='example-collapse-text'>Department: {post.department}</h3>
          <small>Remote: <strong>{post.remote}</strong></small><br/>
          <small>Job Type: <strong>{post.jobType}</strong></small><br/>
          <small>Location: <strong>{post.location}</strong></small><br/>
          <small>Experince: <strong>{post.experience}</strong></small><br/>
          <small className="text-muted">Job Posted {formatDistanceToNow(parseISO(post.created_at))} ago</small>
          <hr style={{ height: '3px',  backgroundColor: 'black' }}/>

          <div>
              {parse(DOMPurify.sanitize(post.jobDescription)) }
          </div>

          <section>
              {parse(DOMPurify.sanitize(post.qualifications)) }
          </section>

          <section>
              {parse(DOMPurify.sanitize(post.responsibilities)) }
          </section>

          <div className='stickyBtns sticky-bottom d-flex justify-content-center gap-3'>
            
            <Button variant='secondary' onClick={onToggle} aria-label="Close">Close</Button>
          </div>

        </div>

      </Collapse>
    </section>
  );
}

export default AppliedJobs;