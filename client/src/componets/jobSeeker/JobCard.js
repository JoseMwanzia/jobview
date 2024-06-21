import React, {useEffect, useState} from 'react';
import Card from 'react-bootstrap/Card';
import { formatDistanceToNow, parseISO } from 'date-fns';

import ApplicationsModal from './ApplicationsModal';
  const companyPost = companyUser.map((company) =>  (company.posts.map((post) => {

    

        return (
          <Card key={post.id} className={`text-center col-lg-6 col-md-5 mb-4 mx-2 crd ${open === post.id ? 'border-3 border-primary' : '' }`}>
            <Card.Header>{company.company_name}</Card.Header>
            <Card.Body>
                {/* <Card.Title><a href='' className='text-dark'>{post.title}</a></Card.Title> */}
                {/* {console.log(post)} */}
                <JobDescription  post={post} onToggle={() => onHandleToggle(post.id)} isOpen={open === post.id} company={company}/>

                <div>
                  {parse(DOMPurify.sanitize(post.jobDescription.slice(0, 300)+'...')) }
                </div>
                <ApplicationsModal post={post} company={company} jobSeeker={jobSeeker} loading={loading}/>
            </Card.Body>
            <Card.Footer className="text-muted">Job Posted {formatDistanceToNow(parseISO(post.created_at))} ago</Card.Footer>
          </Card>
        )
      })))

  if (!jobSeeker || jobSeeker.length === 0) {
    return (
      <div className="text-center">
          <div className="spinner-border" role="status">
            <span className="sr-only"></span>
          </div>
      </div>);
  } else {
    return (
      <>
        {companyPost}
      </>
      )
    }
}

export default JobCard;