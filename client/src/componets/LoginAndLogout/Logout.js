import React from 'react'

function Logout() {

    const handleLogout = (e) => {
        e.preventDefault();
        // console.log("email:", formData.email, "password:", formData.password);
        fetch("/logout", {
            method: "DELETE"
        })
        .then(res => {if (res.ok) {
            console.log(null)
            return window.location.href = '/login'
        }})
    }

  return (
    <button className='col-6' onClick={handleLogout}>Logout</button>
  )
}

export default Logout