import { useState } from "react";
import './LoginSignUp.css';

import user_icon from '../assets/person.png'
import email_icon from '../assets/email.png'
import password_icon from '../assets/password.png'

const LoginSignUp = () => {

const [action,setAction] = useState ("Login");
return (
<div className="container">
<div className="header">
<div className="text">{action}</div>
<div className="underline"></div>
</div>
<div className="inputs">
{action==="Login" ? <div></div>:<div className="input">
<img src={user_icon} alt=""/>
<input type="text" placeholder="Name" />
</div>}

<div className="input">
<img src={email_icon} alt="" />
<input type="email" placeholder="Email" />
</div>
<div className="input">
<img src={password_icon} alt="" />
<input type="password" placeholder="Password" />
</div>
{action==="Sign UP" ? <div></div>:<div className="forgot-password">Forgot password <span>Click Here!</span> </div>}

<div className="submit-container">
<div className={action==="Login" ?"submit red":"submit"} onClick={()=>{setAction("Sign UP")}}>Sign UP</div>
<div className={action==="Sign Up" ?"submit red":"submit"}onClick={()=>{setAction("Login")}}>Login</div>
</div>
</div>
</div>

);



}

export default LoginSignUp;