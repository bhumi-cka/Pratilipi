import React from "react";
import LoginImg from "../Resources/Images/loginpageimg.png";
import Logo from "../Resources/Images/logo-purple-bg.png";

function CreateAccount() {
    return(
        <div>
        <div class="create-account">
            {/* <div class="left-create-acc"> */}
                {/* <img src={Logo} alt="logo"></img> */}
                <div class="create-acc-box">
                    <p>Create your Pratilipi Account</p>
                    <form>
                            <input type="text" class="create-acc-input" placeholder="Full Name"></input>
                            <input type="number" class="create-acc-input" placeholder="Age"></input>
                            <input type="date" class="create-acc-input" placeholder="Date of Birth"></input>
                            <input type="number" class="create-acc-input" placeholder="Mobile No."></input>
                            <input type="text" class="create-acc-input" placeholder="Profession"></input>
                    </form>

                    
                    <div class="create-acc-buttons">
                        <button class="back">Back</button>
                        <button class="next">Next</button>
                    </div>

                </div>
            {/* </div> */}
            {/* <div class="right-login">
                <img src={LoginImg} class="login-img" alt="computer"></img>
            </div> */}
        </div>
        </div>
    );
}

export default CreateAccount;