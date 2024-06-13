import React, { useState } from "react";
import { Link } from "react-router-dom";
import Logout from "../LoginAndLogout/Logout";

function JobSeekerReg() {
    
    const [isChecked, setIsChecked] = useState(false)
    const [data, setdata] = useState([])

    const [jobSeekerData, setJobSeekerData] = useState({
        first_name:"",
        sur_name: "",
        last_name: "",
        email: "",
        password: "",
        password_confirmation: ""
    });
    const [errors, setErrors] = useState([]);

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setJobSeekerData({ ...jobSeekerData, [name]: value });
        // console.log(jobSeekerData);
        // setErrors({ ...errors, [name]: "" });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
    
        // const endpoint = jobSeekerData.registrationType === "donor" ? "donor-dashboard" : "organisations";
    
        try {
          const response = await fetch(`/job_seeker`, {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json'
            },
            body: JSON.stringify(jobSeekerData)
          });

          const data = await response.json();


          if (data.errors === undefined) {
              return window.location.href = "/jobSeekerDashboard";
            } else {
              setErrors(data.errors)
            }
        }
        catch (errors) {console.error(errors)}
      };

  return (
    <div className="d-flex flex-wrap flex-col items-center justify-content-center bg2">
        <div className="w-full max-w-m bg-[#9bbf7f] p-8 rounded-lg shadow-md">
            <form onSubmit={handleSubmit} className='text-dark login-form'>
                <div className="container">
                    <h1>Sign Up</h1>
                    <p>Please fill in this form to create an account.</p>
                    <hr/>

                    <label htmlFor="first_name"><b>First Name</b></label>
                    <input type="text" id="first_name" name="first_name" value={jobSeekerData.first_name} onChange={handleInputChange} placeholder="First Name" className="w-full border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:border-blue-500"/>
                    <p className="col-md-6 text-danger font-weight-bold">{errors.first_name ? 'First Name ' + errors.first_name : null}</p>

                    <label htmlFor="sur_name"><b>Sur Name</b></label>
                    <input type="text" id="sur_name" name="sur_name" value={jobSeekerData.sur_name} onChange={handleInputChange} placeholder="Sur Name" className="w-full border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:border-blue-500"/>
                    <p className="col-md-6 text-danger font-weight-bold">{errors.sur_name ? 'Sur Name ' + errors.sur_name : null}</p>

                    <label htmlFor="last_name"><b>Last Name</b></label>
                    <input type="text" id="last_name" name="last_name" value={jobSeekerData.last_name} onChange={handleInputChange} placeholder="Last Name" className="w-full border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:border-blue-500"/>
                    <p className="col-md-6 text-danger font-weight-bold">{errors.last_name ? 'Last Name ' + errors.last_name : null}</p>

                    <label htmlFor="email"><b>Email</b></label>
                    <input type="text" id="email" name="email" value={jobSeekerData.email} onChange={handleInputChange} className={`w-full border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:border-blue-500`} placeholder="Email address" />
                    <p className="col-md-6 text-danger font-weight-bold">{errors.email ? 'Email ' + errors.email : null}</p>

                    <label htmlFor="password"><b>Password</b></label>
                    <input type="password" id="password" value={jobSeekerData.password} onChange={handleInputChange} placeholder="Enter Password" name="password" className={``}/>
                    <p className="col-md-6 text-danger font-weight-bold">{errors.password ? 'Password ' + errors.password : null}</p>

                    <label htmlFor="repeat-password"><b>Repeat Password</b></label>
                    <input type="password" id="password_confirmation" name="password_confirmation" value={jobSeekerData.password_confirmation} onChange={handleInputChange} className={``} placeholder="Confirm Password"/>
                    <p className="col-md-6 text-danger font-weight-bold">{errors.password_confirmation ? 'Password Confrimation ' + errors.password_confirmation : null}</p>



                    <div className="d-flex flex-wrap">
                        <p className="col-12">Are you looking for <Link to="/login">Talent instaed</Link>?</p>
                        <p className="col-12">Already have an account <Link to="/loginJobSeeker">Login</Link>?</p>
                   </div>

                    <label>
                        <input type="checkbox" checked={isChecked} onChange={(e) => {setIsChecked(e.target.checked)}} name="remember" style={{marginBottom: '15px'}}/> Remember me
                    </label>

                    <p>By creating an account you agree to our <a href="#" style={{color: 'dodgerblue'}}>Terms & Privacy</a>.</p>

                    <div className="clearfix">
                    {/* <button type="button" class="cancelbtn">Cancel</button> */}
                    <button type="submit" className="signupbtn butns">Sign Up</button>
                    {/* <Logout/> */}
                    </div>
                </div>
            </form>
        </div>
    </div>
  )
}

export default JobSeekerReg