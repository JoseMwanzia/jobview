import React, {useEffect, useState} from 'react';
import Card from 'react-bootstrap/Card';
import { formatDistanceToNow, parseISO } from 'date-fns';

import ApplicationsModal from './ApplicationsModal';

function JobCard({jobSeeker, companyUser, loading}) {
  // const [job_seeker, setJob_seeker] = useState([jobSeeker])
  // const [companies, setCompanies] = useState(companyUser)
  // console.log(companyUser);

// useEffect(() => {
//   fetch(`/companies`)
//     .then(res => res.json())
//     .then(data => setCompanies(data))
//     .catch(error => console.error(error))
// }, [])
    
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
        {companyUser.map((company) => {
        //   console.log(company.company_name);
          return (
            <Card key={company.id} className="text-center col-lg-6 col-md-6 mb-4 crd">
            <Card.Header>{company.company_name}</Card.Header>
            <Card.Body>
                <Card.Title>{company.email}</Card.Title>
                <Card.Text>
                    With supporting text below as a natural lead-in to additional content.
                </Card.Text>
              
                <ApplicationsModal company={company} jobSeeker={jobSeeker} loading={loading}/>

            </Card.Body>
            <Card.Footer className="text-muted">Job Posted {formatDistanceToNow(parseISO(company.created_at))} ago</Card.Footer>
            </Card>
          )
      })}
    </>
    )
  }
}

export default JobCard;