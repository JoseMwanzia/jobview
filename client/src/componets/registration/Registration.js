import React, { useState } from "react";
import { Link } from "react-router-dom";
import Logout from "../Logout";

function Registration() {
    
    const [isChecked, setIsChecked] = useState(false)
    const [data, setdata] = useState([])

    const [companyData, setCompanyData] = useState({
        company_name:"",
        email: "",
        password: "",
        password_confirmation: ""
    });
    const [errors, setErrors] = useState({});

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
          console.log( companyData.company_name, companyData.email, companyData.password, companyData.password_confirmation );
          const data = await response.json();
          console.log(data.company_name);
          setdata(data);

          if (data.id === window.sessionData) {
              return window.location.href = "/candidates";
            } else  {
              window.location.href = "/login";
            }
          

        }
        catch (error) {setErrors(error);}
      };

  return (
    <div className="min-h-screen d-flex flex-wrap flex-col items-center justify-center bg2">
        <div className="w-full max-w-m bg-[#9bbf7f] p-8 rounded-lg shadow-md">
            <form onSubmit={handleSubmit} className='text-white'>
                <div className="container">
                    <h1>Sign Up</h1>
                    <p>Please fill in this form to create an account.</p>
                    <hr/>

                    <label htmlFor="company_name"><b>Company Name</b></label>
                    <input type="text" id="company_name" name="company_name" value={companyData.company_name} onChange={handleInputChange} placeholder="Company Name" className="w-full border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:border-blue-500"/>

                    <label htmlFor="email"><b>Email</b></label>
                    <input type="text" id="email" name="email" value={companyData.email} onChange={handleInputChange} className={`w-full border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:border-blue-500 ${errors.email ? "border-red-500" : "" }`} placeholder="Email address" />
                    {/* <input type="text" placeholder="Enter Email" value={companyData.email} onChange={handleInputChange} name="email" required/> */}

                    <label htmlFor="password"><b>Password</b></label>
                    <input type="password" id="password" value={companyData.password} onChange={handleInputChange} placeholder="Enter Password" name="password" className={`w-full border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:border-blue-500 ${errors.password ? "border-red-500" : "" }`}/>

                    <label htmlFor="repeat-password"><b>Repeat Password</b></label>
                    <input type="password" id="password_confirmation" name="password_confirmation" value={companyData.password_confirmation} onChange={handleInputChange} className={`w-full border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:border-blue-500 ${ errors.password_confirmation ? "border-red-500" : "" }`} placeholder="Confirm Password"/>

                    <div className="d-flex flex-wrap">

                        <p className="col-12">Are you seekings a <Link to="/">Job instead</Link>?</p>

                        {/* <label className="col-12">Are you Employing or seekings a Job</label>
                        <select id="registrationType" name="registrationType" value={companyData.value} onChange={handleInputChange} className="m-3">
                            <option value="select" disabled className="text-muted">_ _select</option>
                            <option value="company">Company</option>
                            <option value="candidate">Candidate</option>
                        </select> */}
                    </div>

                    <label>
                        <input type="checkbox" checked={isChecked} onChange={(e) => {setIsChecked(e.target.checked)}} name="remember" style={{marginBottom: '15px'}}/> Remember me
                    </label>

                    <p>By creating an account you agree to our <a href="#" style={{color: 'dodgerblue'}}>Terms & Privacy</a>.</p>

                    <div className="clearfix">
                    {/* <button type="button" class="cancelbtn">Cancel</button> */}
                    <button type="submit" className="signupbtn">Sign Up</button>
                    {/* <Logout/> */}
                    </div>
                </div>
            </form>
        </div>
    </div>
  )
}

export default Registration