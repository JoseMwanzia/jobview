import { useEffect, useState } from 'react';
import './App.css'
import { Route, Routes } from 'react-router-dom';
import Login from './componets/LoginAndLogout/Login';
import Registration from './componets/registration/Registration';
import CompanyDashboard from './componets/company/CompanyDashboard';
import Example from './Example';
import JobSeekerDashboard from './componets/jobSeeker/JobSeekerDashboard';
import LoginJobSeeker from './componets/LoginAndLogout/LoginJobSeeker';
import Logout from './componets/LoginAndLogout/Logout';
import InitialLanding from './componets/InitialLanding';
import JobSeekerReg from './componets/registration/JobSeekerReg';

function App() {
  const [myCompany, setMyCompany] = useState()
  const [companyUser, setCompanyUser] = useState([])
  const [jobSeeker, setJobSeeker] = useState([])
  const [loading, setLoading] = useState(true); // Initialize loading state

  useEffect(() => {
    // all companies to jobseeker
    fetch('/applicableCompanies')
    .then(res => {if (res.ok) {
      res.json().then(data => { setCompanyUser(data)})
    }
    })
  }, [])

  useEffect(() => {
    // keep company logged in
    const api = async () => {
      try {
      const response = await fetch('/my_company')
      const data = await response.json()
      setMyCompany(data);
    }
    catch (error) {
    console.error('Error fetching data:', error);
  } finally {
    setLoading(false) //Set loading to false after fetch completes
  }}
    api()
  }, [])

  useEffect(() => {
    // keep jobseeker logged in
    fetch('/jobseeker')
    .then(res => {if (res.ok) {
      res.json().then(data => { setJobSeeker(data)})}
    })
  }, [])

  if (!jobSeeker ) {
    return <Login/>
  }

    return (
      <div className='App'>
        <Routes>
          <Route path='/' element={<InitialLanding/> }/>
          <Route path='/registration' element={<Registration/> }/>
          <Route path='/jobseekerReg' element={<JobSeekerReg/> }/>
          <Route path='/login' element={<Login/>}/>
          <Route path='/loginJobSeeker' element={<LoginJobSeeker/>}/>
          <Route path='/logout' element={<Logout/>}/>
          <Route path='/companyDashboard' element={<CompanyDashboard myCompany={myCompany} loading={loading} companyUser={companyUser}/>}/>
          <Route path='/jobSeekerDashboard' element={<JobSeekerDashboard jobSeeker={jobSeeker} companyUser={companyUser}/>}/>
          <Route path='/example' element={<Example myCompany={myCompany} jobSeeker={jobSeeker}/>}/>
        </Routes>
      </div>
    );
}

export default App;
