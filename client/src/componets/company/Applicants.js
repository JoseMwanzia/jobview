import React from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Modal from 'react-bootstrap/Modal';
import { formatDistanceToNow, parseISO } from 'date-fns';

function Applicants({myCompany, selectedPost, show, setShow, fullscreen}) {

  // Conditional rendering based on loading state and fetched data.
  // (VERY IMPORTANT IF YOU DONT WANT THE INITIAL 'undefined' RETURN VALUE FROM myCompany state)
  if (loading) {
    return <h3>Loading...</h3>;
  }

  if (!selectedPost) {
    return <h4>loading...</h4>;
  }

  const appliedJobs = myCompany.applications.map((app) => app )
  const filteredJobs = appliedJobs.filter((jobs) => jobs.post_id === selectedPost.id)
  // console.log(myCompany);

  const applicantsCard = filteredJobs.map(application => {
    return(
      <Card key={application.id} className='col-md-6 col-lg-3 col-sm-12 text-start m-2 border border-primary'>
        <Card.Header>{application.name}</Card.Header>
        <Card.Body>
          <Card.Title>DETAILS</Card.Title>

          <div className='text-start'>
            <ul>
              <li>Email: {application.email}</li>
              <li>Address: {application.address}</li>
              <li>Phone: {application.phone}</li>
            </ul>
          </div>

          <Button href={`${application.resume_url}`} target='_blank' rel="noreferrer"  variant="outline-primary" className='m-2'>Check Resume</Button>
          {/* <Button onClick={(() => handleDeleteApplication(application.id))} variant="outline-danger" className='m-2'>Delete Applicant</Button> */}

          <Button onClick={(() => handleDeleteApplication(application.id))} variant='outline-danger' className='m-1 delete-button'>
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="red" className="bi bi-trash3 delete-icon" viewBox="0 0 16 16">
            <path d="M6.5 1h3a.5.5 0 0 1 .5.5v1H6v-1a.5.5 0 0 1 .5-.5M11 2.5v-1A1.5 1.5 0 0 0 9.5 0h-3A1.5 1.5 0 0 0 5 1.5v1H1.5a.5.5 0 0 0 0 1h.538l.853 10.66A2 2 0 0 0 4.885 16h6.23a2 2 0 0 0 1.994-1.84l.853-10.66h.538a.5.5 0 0 0 0-1zm1.958 1-.846 10.58a1 1 0 0 1-.997.92h-6.23a1 1 0 0 1-.997-.92L3.042 3.5zm-7.487 1a.5.5 0 0 1 .528.47l.5 8.5a.5.5 0 0 1-.998.06L5 5.03a.5.5 0 0 1 .47-.53Zm5.058 0a.5.5 0 0 1 .47.53l-.5 8.5a.5.5 0 1 1-.998-.06l.5-8.5a.5.5 0 0 1 .528-.47M8 4.5a.5.5 0 0 1 .5.5v8.5a.5.5 0 0 1-1 0V5a.5.5 0 0 1 .5-.5"/>
            </svg>
          </Button>

        </Card.Body>
        <Card.Footer className="text-muted">Applied {formatDistanceToNow(parseISO(application.created_at))} ago</Card.Footer>
      </Card>
    )
  })
  

  return (
      <Modal show={show} fullscreen={fullscreen} onHide={() => setShow(false)}>
        <Modal.Header closeButton>
          <Modal.Title>{selectedPost.title}</Modal.Title>
          <Modal.Title></Modal.Title>
        </Modal.Header>
        <div className='d-flex flex-wrap justify-content-start col-sm-12'>
          {applicantsCard}
        </div>
      </Modal>
    )
  }


export default Applicants;