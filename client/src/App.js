import { useEffect, useState } from 'react';
import './App.css'
import { Route, Routes } from 'react-router-dom';
import Login from './componets/Login';
import Registration from './componets/registration/Registration';
import Candidates from './componets/Candidates';

function App() {
  const [companyUser, setCompanyUser] = useState()

  useEffect(() => {
    fetch('/me')
    .then(res => {if (res.ok) {
      res.json().then(data => { setCompanyUser(data)})}
    })
  }, [])

  return (
    <div className='App'>
      <Routes>
        <Route path='/login' element={<Login companyUser={companyUser}/>}/>
        <Route path='/registration' element={<Registration/> }/>
        <Route path='/candidates' element={<Candidates companyUser={companyUser}/>}/>
      </Routes>
    </div>
  );
}

export default App;
