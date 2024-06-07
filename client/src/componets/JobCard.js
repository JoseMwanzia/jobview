import React, {useEffect, useState} from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { formatDistanceToNow, parseISO } from 'date-fns';

function JobCard() {
  const [companies, setCompanies] = useState([])

useEffect(() => {
  fetch('/companies')
    .then(res => res.json())
    .then(data => setCompanies(data))
    .catch(error => console.error(error))
}, [])
    
if (!companies || companies.length === 0) {
  return (
    <div className="text-center">
        <div className="spinner-border" role="status">
          <span className="sr-only"></span>
        </div>
    </div>);
} else {
  return (
    <>
        {companies.map((company) => {
          return (
            <Card key={company.id} className="text-center col-lg-6 col-md-6 mb-4">
            <Card.Header>{company.company_name}</Card.Header>
            <Card.Body>
              <Card.Title>{company.email}</Card.Title>
              <Card.Text>
                With supporting text below as a natural lead-in to additional content.
              </Card.Text>
              <Button variant="primary">Go somewhere</Button>
            </Card.Body>
            <Card.Footer className="text-muted">{formatDistanceToNow(parseISO(company.created_at))} ago</Card.Footer>
            </Card>
          )
      })}
    </>
    )
  }
}

export default JobCard;