import React from 'react';
import Collapse from 'react-bootstrap/Collapse';
import DOMPurify from 'dompurify';
import parse from 'html-react-parser';
import { formatDistanceToNow, parseISO } from 'date-fns';

function JobDescription({post,isOpen, onToggle, company}) {

    
  return (
    <section >

      <h5
        onClick={onToggle} aria-controls='example-collapse-text' // runs the code " () => handleToggle(post.id) "
        aria-expanded={isOpen}
        className='text-dark text-decoration-underline'
      >
        {post.title}
     </h5>
      <Collapse in={isOpen}>
        <div>
            <div  className='collapse-panel rounded-3 p-3 col-lg-5 col-md-6 position-fixed end-0 z-2 overflow-auto border  text-start'>

                    <button onClick={onToggle} type="button" className="btn-close" aria-label="Close"></button><hr style={{ height: '3px',  backgroundColor: 'gray' }}/>
                    
                    <h1 className='text-decoration-underline d-inline'>{post.title}</h1>
                    <h5 id='example-collapse-text'>at {company.company_name}</h5><br/>

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
            </div>
        </div>
      </Collapse>
    </section>
  );
}

export default JobDescription;