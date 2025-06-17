import { Link } from 'react-router-dom';
import LoginHeader from "./signIn/LoginHeader";
import "./signIn/Login.css";
import { useState } from 'react';

function RegisterationPage() {

  const [userRole, setUserRole] = useState("");

  function handleRoleSelection(e) {
    setUserRole(e.target.value);
  }

  return (
    <div className="login-container">
      <LoginHeader />
      <div className='login-body'>
        <form className='login-form'>
          <div>
            <select defaultValue="" onChange={handleRoleSelection}>
              <option className="select-role" value="" disabled hidden>select role</option>
              <option value="admin">Admin</option>
              <option value="student">Student</option>
              <option value="staff">Staff</option>
            </select>
            <input type="text" id="firstname" name="firstname" placeholder="First-Name" />
            <input type="text" id="lastname" name="lastname" placeholder="Last-Name" />
            <input type="text" id="username" name="username" placeholder='Username' />
            <input type="password" id="password" name="password" placeholder='Password' />
            <input type="password" id="confirm-password" name="confirm-password" placeholder='confirm password' />
          </div>
          <Link className='reg login-btn' to={userRole === "admin" ? "/ad-dashboard" : userRole === "student" ? "/st-dashboard" : userRole === "staff" ? "/ff-dashboard" : "#"}>REGISTER</Link>
        </form>
        <h2 className='school'>GINK INNOVATION </h2>
      </div>
    </div>
  )
}


export default RegisterationPage;