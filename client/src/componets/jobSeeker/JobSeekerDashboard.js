import React, {useState} from 'react'

import JobCard from './JobCard';

import Navigation from './Navigation';



function JobSeekerDashboard({jobSeeker, companyUser, loading}) {
// console.log(jobSeeker);
  const [open, setOpen] = useState(null);

  const handleToggle = (id) => {
    setOpen(open === id ? null : id);
  };

  return (
  <>
    <Navigation jobSeeker={jobSeeker}/>
    <JobCard open={open} onHandleToggle={handleToggle} jobSeeker={jobSeeker} companyUser={companyUser} loading={loading}/>
  </>
  )
}

export default JobSeekerDashboard