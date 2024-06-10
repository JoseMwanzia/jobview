import React from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { formatDistanceToNow, parseISO } from 'date-fns';

function Applicants({myCompany, loading, companyUser}) {

  // Conditional rendering based on loading state and fetched data.
  // (VERY IMPORTANT IF YOU DONT WANT THE INITIAL 'undefined' RETURN VALUE FROM myCompany state)
  if (loading) {
    return <h3>Loading...</h3>;
  }
  if (!myCompany || myCompany.length === 0) {
    return <p>No data available</p>;
  }


  const seekers = myCompany.job_seekers.map((seeker, index) => {
    return (
      <Card key={index} className="text-center col-lg-6 col-md-6 mb-4" >
        <Card.Header>{seeker.first_name}</Card.Header>
        <Card.Body>
          <Card.Title>{seeker.email}</Card.Title>
          <Card.Text>
            With supporting text below as a natural lead-in to additional content.
          </Card.Text>
          <Button variant="primary">Go somewhere</Button>
        </Card.Body>
        <Card.Footer className="text-muted">Applied {formatDistanceToNow(parseISO(seeker.created_at))} ago</Card.Footer>
      </Card>
    )
  })

  return (
    <>
      {seekers}
    </>
    )
  }


export default Applicants;