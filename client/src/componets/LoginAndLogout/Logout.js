import React from 'react'

function Logout({myCompany, jobSeeker}) {

    const handleLogout = (e) => {
        e.preventDefault();
        // console.log("email:", formData.email, "password:", formData.password);
        const api = myCompany ? "/logout" : "/logout_jobseeker"

        fetch(api, {
          method: "DELETE"
        })
        .then(res =>{if (res.ok) {
          // api === "/logout" ? window.location.href = '/login' : window.location.href = '/loginJobSeeker'
          window.location.href = '/'
          console.log("Loged Out Successfully!")
        }})
    }

  return (
    <button className='col-6' onClick={handleLogout}>Logout</button>
  )
}

export default Logout