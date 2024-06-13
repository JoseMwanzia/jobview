import React, { useState } from "react";
import { Link } from "react-router-dom";
import Logout from "../LoginAndLogout/Logout";

function Registration() {
    
    const [isChecked, setIsChecked] = useState(false)

    const [companyData, setCompanyData] = useState({
        company_name:"",
        email: "",
        password: "",
        password_confirmation: ""
    });
    const [errors, setErrors] = useState([]);

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setCompanyData({ ...companyData, [name]: value });
        // console.log(companyData);
        // setErrors({ ...errors, [name]: "" });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
    
        // const endpoint = companyData.registrationType === "donor" ? "donor-dashboard" : "organisations";
    
        try {
          const response = await fetch(`/company`, {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json'
            },
            body: JSON.stringify(companyData)
          });

          const data = await response.json();
          if (data.errors === undefined) {
              return window.location.href = "/companyDashboard";
            } 
            setErrors(data.errors)
        }
        catch (error) {setErrors(error);}
      };

  return (
    <div className="d-flex flex-wrap flex-col items-center justify-content-center bg2">
        <div className="w-full max-w-m bg-[#9bbf7f] p-8 rounded-lg shadow-md">
            <form onSubmit={handleSubmit} className='text-dark login-form'>
                <div className="container">
                    <h1>Sign Up</h1>
                    <p>Please fill in this form to create an account.</p>
                    <hr/>

                    <label htmlFor="company_name"><b>Company Name</b></label>
                    <input type="text" id="company_name" name="company_name" value={companyData.company_name} onChange={handleInputChange} placeholder="Company Name" className="w-full border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:border-blue-500"/>
                    <p className="col-md-6 text-danger font-weight-bold">{errors.company_name ? 'Company Name ' + errors.company_name : null}</p>

                    <label htmlFor="email"><b>Email</b></label>
                    <input type="text" id="email" name="email" value={companyData.email} onChange={handleInputChange} className={`w-full border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:border-blue-500`} placeholder="Email address" />
                    <p className="col-md-6 text-danger font-weight-bold">{errors.email ? 'Email ' + errors.email : null}</p>
                    

                    <label htmlFor="password"><b>Password</b></label>
                    <input type="password" id="password" value={companyData.password} onChange={handleInputChange} placeholder="Enter Password" name="password" className={`w-full border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:border-blue-500`}/>
                    <p className="col-md-6 text-danger font-weight-bold">{errors.password ? 'Password ' + errors.password : null}</p>

                    <label htmlFor="repeat-password"><b>Repeat Password</b></label>
                    <input type="password" id="password_confirmation" name="password_confirmation" value={companyData.password_confirmation} onChange={handleInputChange} className={`w-full border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:border-blue-500`} placeholder="Confirm Password"/>
                    <p className="col-md-6 text-danger font-weight-bold">{errors.password_confirmation ? 'Password Confirmation ' + errors.password_confirmation : null}</p>

                    <div className="d-flex flex-wrap">

                        <p className="col-12">Are you seekings a <Link to="/loginJobSeeker">Job instead</Link>?</p>
                        <p className="col-12">Already have an account <Link to="/login">Login</Link>?</p>

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

export default Registration