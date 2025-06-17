import { useState } from "react";
import { FaEye, FaEyeSlash} from "react-icons/fa"; // Import the home icon
import './ChangePassword.css'
import Nav2 from "./Nav2";
import Dir from "./Dir";

function ChangePassword({navItems, subtitle}) {

  const [showCurrentPassword, setShowCurrentPassword] = useState(false);
  const [showNewPassword, setShowNewPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);



  return (
    <div className="overall">
      <Nav2 navItems={navItems} subtitle={subtitle} />
      <div className="sub-password-change-container">
        <Dir />
        <h3 className="change-text">Change Password</h3>
        <div className="support-container">
          <div className="cp-container">
            <form className="password-form" >
              <h1>Change your Password</h1>
              <div className="pnc-container">
                <input type={showCurrentPassword ? "text" : "password"} placeholder="Current Password" required />
                {showCurrentPassword ? <FaEyeSlash className="local-icon" onClick={() => setShowCurrentPassword(prev => !prev)} /> : <FaEye className="local-icon" onClick={() => setShowCurrentPassword(prev => !prev)}  />}
              </div>
              <div className="pnc-container">
                <input type={showNewPassword ? "text" : "password"} placeholder="New Password" required />
                {showNewPassword ? <FaEyeSlash className="local-icon" onClick={() => setShowNewPassword(prev => !prev)} /> : <FaEye className="local-icon" onClick={() => setShowNewPassword(prev => !prev)}  />}
              </div>
              <div className="pnc-container">
                <input type={showConfirmPassword ? "text" : "password"} placeholder="Confirm Password" required />
                {showConfirmPassword ? <FaEyeSlash className="local-icon" onClick={() => setShowConfirmPassword(prev => !prev)} /> : <FaEye className="local-icon" onClick={() => setShowConfirmPassword(prev => !prev)}  />}
              </div>
              <button>Change Password</button>
            </form>
            <div className="instruction-texts">
              <h3>Password must contain:</h3>
              <span>At least 1 upper case letter (A-Z)</span>
              <span>At least 1 number(0-9)</span>
              <span>At least 8 characters</span>
            </div>
          </div>
          
        </div>
      </div>
    </div>
  )
}

export default ChangePassword;