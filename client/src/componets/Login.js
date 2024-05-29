import React, { useState } from "react";
import Logout from "./Logout";
// import Logo from "../assets/logo4.png";
import avatar from "../assets/img_avatar2.png";

function Login({companyUser}) {
  const [formData, setFormData] = useState({ email: "", password: "" });
  const [userData, setUserData] = useState([])
  const [errors, setErrors] = useState({});

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
        e.preventDefault();
        // console.log("email:", formData.email, "password:", formData.password);
        try {
            const response = await fetch("/me_company", {
                method: "POST",
                headers: {
                "Content-Type": "application/json"
                },
                body: JSON.stringify(formData)
            })
            const data = await response.json()
            console.log(window.sessionData);

            if (data.id === window.sessionData) {
                return window.location.href = "/candidates";
            } 
            //   else  {
            //     window.location.href = "/login";
            //   }
        }
        catch (error) {setErrors(error);}
    };

  return (
    <div className="min-h-screen d-flex flex-wrap flex-col items-center justify-center bg">
      <div className="w-full max-w-md bg-[#9bbf7f] p-8 rounded-lg shadow-md">
        <h1 className="text-3xl font-bold text-yellow-500 text-center mb-6">
          Login
        </h1>

        <form onSubmit={handleSubmit}>
            <div className="imgcontainer">
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
                        className="col-12 w-full px-3 py-2 rounded-lg focus:outline-none focus:ring-2"
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

                <button type="submit" className="w-full bg-yellow-500 text-white py-2 rounded-lg hover:bg-yellow-600 transition duration-300">
                    Login
                </button>
                {<Logout/>}
                <label>
                {/* <input type="checkbox" checked="checked" name="remember"/> Remember me */}
                </label>
            </div>

            <div className="container" style={{backgroundColor: '#f1f1f1'}}>
                {/* <button type="button" className="cancelbtn">Cancel</button> */}
                <span className="psw">Forgot <a href="#">password?</a></span>
            </div>
        </form>
        <div className="mt-4 text-center bg-danger">
          <p>
            Don't have an account?{" "}
            <a href="/registration" className="font-semibold hover:underline">
              Register
            </a>
          </p>
        </div>
      </div>
      <div className="mt-8 text-center text-white font-semibold mt-40">
        <p>
          For further support, you may visit the Help Center or contact our
          customer service team.
        </p>
        {/* <img src={Logo} alt="logo" className="h-25 w-40 mx-auto mt-4" /> */}
      </div>
    </div>
  );
}

export default Login;
