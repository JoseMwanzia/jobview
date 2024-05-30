import { useEffect, useState } from 'react';
import './App.css'
import { Route, Routes } from 'react-router-dom';
import Login from './componets/Login';
import Registration from './componets/registration/Registration';
import CompanyDashboard from './componets/CompanyDashboard';

function App() {
  const [companyUser, setCompanyUser] = useState()

  useEffect(() => {
    // keep logged in
    fetch('/me')
    .then(res => {if (res.ok) {
      res.json().then(data => { setCompanyUser(data)})}
    })
  }, [])

  if (!companyUser) return <Login/>

  return (
    <div className='App'>
      <Routes>
        {/* <Route path='/' element={</>}/> */}
        <Route path='/login' element={<Login/>}/>
        <Route path='/registration' element={<Registration/> }/>
        <Route path='/companyDashboard' element={<CompanyDashboard companyUser={companyUser}/>}/>
      </Routes>
    </div>
  );
}

export default App;
