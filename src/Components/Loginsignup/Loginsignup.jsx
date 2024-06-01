
import React, { useState } from 'react';
 
import './Loginsignup.css';

const Loginsignup = () => {
    const [action, setAction] = useState("Login");

    return (


        <div className='container'>
        <div className="header">
                <div className="text">{action}</div>
                <div className="underline"></div>
            
        
            {/* Buttons at the top */}
            <div className="top-buttons">
            <button className={action === "Sign Up" ? "active" : ""} onClick={() => setAction("Sign Up")}>Sign Up</button>
                <button className={action === "Login" ? "active" : ""} onClick={() => setAction("Login")}>Login</button>
            </div>

            

            <div className="inputs">
                {action === "Login" ? null : (
                    <div className="input">
                        <input type="text" placeholder="Name" />
                    </div>
                )}

                <div className="input">
                    <input type="Phone" placeholder="Phone Number" />
                </div>
                <div className="input">
                    <input type="password" placeholder="Password" />
                </div>
            </div>

            <div>
                {action === "Sign Up" ? null : (
                    <div className="forgot-password">
                        Forgot Password? <span>Click Here!</span>
                    </div>
                )}
    
                {action === "Sign Up" ? (
        <div className="submit-container">
            <div className="submit" onClick={() => setAction("Sign Up")}>
                <span style={{color: 'white'}}>Sign Up</span>
            </div>
        </div>
                ): (
                    <div className="submit-container">
                        <div className="submit" onClick={() => setAction("Login")}>
                            <span style={{color: 'white'}} >Login</span>
                        </div>
                    </div>
                )}
                </div>
            </div>
</div>
           
            
    
    )
}
export default Loginsignup;
