import React, { useState, useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { UserContext } from "./UserContext";
import axios from "axios";
import greenTick from "../Resources/Images/green-tick.png";


function CreateAccount() {

    const navigate = useNavigate();

    const [userData, setUserData] = useState({});
    const { updateUser } = useContext(UserContext);
    const [setPass, setSetPass] = useState(false);
    const [setCreate, setSetCreate] = useState(true);
    const [created, setCreated] = useState(false);
    const [fIsDisabled, setFIsDisabled] = useState(true);
    


    function handleClickBackPass() {
        setSetCreate(true);
        setSetPass(false);
    }

    function handleClickNextCreate() {
        setSetCreate(false);
        setSetPass(true);
    }

    function handleFinish(e) {
        setSetPass(false);
        setCreated(true);
        e.preventDefault();

        const Data = JSON.stringify(userData);

        axios
            .post('${http://localhost:3001/Data}', {body: userData})
            .then(res => setUserData(res))
            .catch(error => console.log(error))

        updateUser(userData);

    }

    function handleConfirmPass(e) {
        if (userData.password == e.target.value) {
            setFIsDisabled(false);
        }
        else {
            setFIsDisabled(true);
        }
    }




    return(
        <div>
            {setCreate && 
                <div className="create-account">
                    <div className="create-acc-box">
                        <p>Create your Pratilipi Account</p>
                        <form>
                                <input 
                                    type="text" 
                                    className="create-acc-input" 
                                    placeholder="Full Name"
                                    onChange={(e) => setUserData({ ...userData, fullName: e.target.value})}></input>
                                <input 
                                    type="number" 
                                    className="create-acc-input" 
                                    placeholder="Age"
                                    onChange={(e) => setUserData({ ...userData, age: e.target.value})}></input>
                                <input 
                                    type="date" 
                                    className="create-acc-input" 
                                    placeholder="Date of Birth"
                                    onChange={(e) => setUserData({ ...userData, dob: e.target.value})}></input>
                                <input 
                                    type="number" 
                                    className="create-acc-input" 
                                    placeholder="Mobile No."
                                    onChange={(e) => setUserData({ ...userData, mobile: e.target.value})}></input>
                                <input 
                                    type="text" 
                                    className="create-acc-input" 
                                    placeholder="Profession"
                                    onChange={(e) => setUserData({ ...userData, profession: e.target.value})}></input>
                                <div className="create-acc-buttons">
                                    <Link to="/">
                                        <button type="button" className="back">Back</button>
                                    </Link>
                            
                                        <button onClick={handleClickNextCreate} type="button" className="next">Next</button>
        
                                </div>
                        </form>

                    </div>
                </div>}
                
            {setPass && <div>
                <div className="create-account setpass">

                    <div className="create-acc-box">
                        <p>Create your Pratilipi Account</p>
                        <form>
                                <input 
                                    type="email" 
                                    className="create-acc-input" 
                                    placeholder="Email"
                                    onChange={(e) => setUserData({ ...userData, email: e.target.value})}></input>
                                <input 
                                    type="password" 
                                    className="create-acc-input" 
                                    placeholder="Password"
                                    onChange={(e) => setUserData({ ...userData, password: e.target.value})}></input>
                                <input 
                                    type="password" 
                                    className="create-acc-input" 
                                    placeholder="Confirm Password"
                                    onChange={handleConfirmPass}></input>
                                
                                <div className="create-acc-buttons">
                                    <button type="button" onClick={handleClickBackPass} className="back">Back</button>
                                    <button type="submit" onClick={handleFinish} disabled={fIsDisabled} className="next">Finish</button>
                                </div>
                        </form>

                    </div>
                </div>
            </div>}

            {created && <div>
                <div className="create-account acc-created">

                    <div className="create-acc-box">
                        <p>Your account has been created.</p>
                        <img class="green-tick" src={greenTick} alt="tick-mark"></img>
                    </div>
                </div>
            </div>}
        </div>
    );
}


export default CreateAccount;