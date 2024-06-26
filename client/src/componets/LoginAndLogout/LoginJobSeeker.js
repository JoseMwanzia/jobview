import React, { useState } from "react";
import avatar from "../../assets/img_avatar2.png";

function LoginJobSeeker() {
  const [formData, setFormData] = useState({ email: "", password: "" });
  const [errors, setErrors] = useState('');

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    await fetch("/me_sekeer", {
      method: "POST",
      headers: {
      "Content-Type": "application/json"
      },
      body: JSON.stringify(formData)
    })
    .then(res => res.json())
    .then(data => {
      data.errors === undefined 
        ? window.location.href = "/jobSeekerDashboard" 
        : setErrors(data.errors);
    })
    .catch (error => {
      console.log('Error:', error);
    })
  };

  return (
    <div className="d-flex flex-wrap flex-col items-center justify-content-center bg">
      <div className="w-full max-w-md bg-[#9bbf7f] p-8 rounded-lg shadow-md">
        <h1 className="text-3xl font-bold text-yellow-500 text-center mb-6">
          Login to Find your Dream Job
        </h1>

        <form onSubmit={handleSubmit} className="login-form">
            <div className="imgcontainer-avatar">
                <img src={avatar} alt="Avatar" className="avatar" style={{width: '10%', AspectRatio: 5/4, ObjectFit: 'contain'}}/>
            </div>

            <div className="container">
                <label htmlFor="email" className="block mb-2 font-medium"></label>
                <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        className={`col-12 w-full px-3 py-2 rounded-lg focus:outline-none focus:ring-2`}
                        placeholder="Enter your email"
                        
                        />

                <label htmlFor="password" className="block mb-2 font-medium"></label>
                <input
                        type="password"
                        id="password"
                        name="password"
                        value={formData.password}
                        onChange={handleInputChange}
                        className="w-full px-3 py-2 rounded-lg focus:outline-none focus:ring-2 "
                        placeholder="Enter your password"
                        
                        />

                <p className="col-md-6 text-danger font-weight-bold">{errors}</p>
                <button type="submit" className="col-3 butns">
                    Job Seeker Login
                </button>
                <label>
                {/* <input type="checkbox" checked="checked" name="remember"/> Remember me */}
                </label>
            </div>

            <div className="container" style={{backgroundColor: '#f1f1f1'}}>

                <span className="psw"><a href="#" className="text-primary">Forgot password?</a></span>
            </div>
        </form>
        <div className="mt-4 ms-2 text-start">
          <p>
            Don't have an account?{" "}
            <a href="/jobseekerReg" className="font-semibold hover:underline text-primary">
              Register
            </a>
          </p>
        </div>
      </div>
    </div>
  );
}

export default LoginJobSeeker;
