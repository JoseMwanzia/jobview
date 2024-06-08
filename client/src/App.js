import { useEffect, useState } from 'react';
import './App.css'
import { Route, Routes } from 'react-router-dom';
import Login from './componets/LoginAndLogout/Login';
import Registration from './componets/registration/Registration';
import CompanyDashboard from './componets/company/CompanyDashboard';
import Example from './Example';
import JobSeekerDashboard from './componets/jobSeeker/JobSeekerDashboard';
import LoginJobSeeker from './componets/LoginAndLogout/LoginJobSeeker';

function App() {
  const [companyUser, setCompanyUser] = useState([])
  const [myCompany, setMyCompany] = useState([])
  const [jobSeeker, setJobSeeker] = useState([])

  useEffect(() => {
    // all companies to jobseeker
    fetch('/allCompanies')
    .then(res => {if (res.ok) {
      res.json().then(data => { setCompanyUser(data)})}
    })
  }, [])
  // console.log(companyUser);

  useEffect(() => {
    // keep company logged in
    const api = async () => {
      const response = await fetch('/me')
      const data = await response.json()
      setMyCompany(data);
    }
    api()
  }, [])

  useEffect(() => {
    // keep jobseeker logged in
    fetch('/me_jobseeker')
    .then(res => {if (res.ok) {
      res.json().then(data => { setJobSeeker(data)})}
    })
  }, [])

  if (!jobSeeker) {
    return <LoginJobSeeker/>
  }
  else {
    return (
      <div className='App'>
        <Routes>
          <Route path='/registration' element={<Registration/> }/>
          <Route path='/login' element={<Login/>}/>
          <Route path='/loginJobSeeker' element={<LoginJobSeeker/>}/>
          <Route path='/companyDashboard' element={<CompanyDashboard myCompany={myCompany}/>}/>
          <Route path='/jobSeekerDashboard' element={<JobSeekerDashboard jobSeeker={jobSeeker} companyUser={companyUser}/>}/>
          <Route path='/example' element={<Example/>}/>
        </Routes>
      </div>
    )
  };
}

export default App;
