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
import MyJobs from './componets/jobSeeker/MyJobs';

function App() {
  const [myCompany, setMyCompany] = useState()
  const [companyUser, setCompanyUser] = useState([])
  const [jobSeeker, setJobSeeker] = useState([])
  const [loading, setLoading] = useState(true); // Initialize loading state
  const [error, setError] = useState(null);

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
      fetch('/my_company')
      .then(response => response.json())
      .then(data => {
        setMyCompany(data)
        setLoading(false);
  })
      .catch (error => {
        setError(error);
        setLoading(false);}
      )

  }, [])

  

  useEffect(() => {
    // keep jobseeker logged in
    fetch('/jobseeker')
    .then(res => {if (res.ok) {
      res.json().then(data => { setJobSeeker(data)})}
    })
  }, [])

  if (loading) {
    return <h1 className='text-center'>Loading...</h1>;
  }
  if (error) {
    return <div>Error: {error.message}</div>;
  }

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
          <Route path='/myjobs' element={<MyJobs jobSeeker={jobSeeker} companyUser={companyUser}/>}/>
          <Route path='/example' element={<Example myCompany={myCompany} jobSeeker={jobSeeker}/>}/>
        </Routes>
      </div>
    );
}

export default App;
