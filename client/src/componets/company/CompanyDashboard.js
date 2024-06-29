import React from 'react'

import LandingPage from './LandingPage';
// import Applicants from './Applicants';
import CreateJobsForm from './CreateJobsForm';
import Navigation from './Navigation';


function CompanyDashboard({myCompany, loading, companyUser}) {

  if (loading) {
    return <h3 className='text-center'>Loading...</h3>;
  }
  if (!myCompany || myCompany.length === 0) {
    return <p>No data available</p>;
  }

  return (
    <div style={{height: '1000px'}}>
      
      <Navigation myCompany={myCompany}/>
      <LandingPage/>
      <CreateJobsForm myCompany={myCompany}/>
      {/* <Applicants myCompany={myCompany} loading={loading} companyUser={companyUser}/> */}
      
    </div>
  )
}

export default CompanyDashboard