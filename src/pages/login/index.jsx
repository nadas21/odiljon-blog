import { NavLink } from "react-router-dom";
import "./login.css";
// import { auth, provider } from "../register/googleConfig";
import { signInWithPopup } from "firebase/auth";
import { FaGooglePlusG } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import {auth, provider} from "../register/googleConfig"

export const Login = () => {

  const navigate = useNavigate()
 const [email,setEmail] = useState("")
  const handleClick = async () => {
  await signInWithPopup(auth, provider).then ((data) => {
  fetch(`https://bloguz.onrender.com/login`,{
    method: "POST",
    headers:{
      "Content-Type": "application/json"
    },
    body: JSON.stringify({
      email : data.user.email,
    })
  })
  .then((res) => res.json())
  .then((info) =>  { 
    if (info.token) {
      localStorage.setItem("admin", info.token)
    }if (info.verifAdmin !== null) {
      localStorage.setItem("admin", info.verifAdmin)
      navigate("/admin")
    }
    if (info.verifAdmin === null) {
      navigate("/")
    }
  });
  });
  };



  const Login = async () => {
    fetch(`https://bloguz.onrender.com/login`,{
      method: "POST",
      headers:{
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        email,
      })
    })
    .then((res) => res.json())
    .then((info) =>  { if (info.token) {
      localStorage.setItem("token", info.token)
    }if (info.verifAdmin !== null) {
      localStorage.setItem("admin", info.verifAdmin)
      navigate("/admin")
    }
    if (info.verifAdmin === null) {
      navigate("/")
    }});
    };


  return (
    <div className="container">
      <div className="register-inner">
        <h2 className="register-title">Tizimga kirish</h2>
        <p className="register-title-p">
          Ro'yxatdan o'tish paytida taqdim etilgan elektron pochta va parol
          yordamida hisobingizga kiring.
        </p>
        <div className="register">
          <fieldset className="fieldset">
            <label htmlFor="email" className="register-label">
              Email
            </label>
            <input
              type="email"
              className="register-input"
              id="email"
              placeholder="Email..."
              name="email"
              value={email}
              onChange={(e)  => setEmail(e.target.value)}
            />
          </fieldset>
          <fieldset className="fieldset">
            <label htmlFor="password" className="register-label">
              Password
            </label>
            <input
              type="password"
              className="register-input"
              id="password"
              placeholder="Parol..."
            />
          </fieldset>
          <p className="register-text">
            Ro'yxatdan o'tmaganmisiz?{" "}
            <NavLink className="register-link" to={"/register"}>
              Sign up
            </NavLink>
          </p>
          <div className="register-btn-box">
            <button className="register-btn" onClick={Login} >
              Ro'yxatdan o'tish
              </button>
            <button  className="google-button"  onClick={handleClick}>
              <FaGooglePlusG className="google-icon" /> Sign in with google
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
