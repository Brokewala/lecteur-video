import React, { useState } from 'react';
import "./Signin.scss";
import { signinAction } from '../../Actions/video-action';
import { useDispatch } from "react-redux"
import { useNavigate } from 'react-router-dom';

const Signin = () => {
    const [email, setEmail] = useState(String);
    const [password, setPassword] = useState(String);
    const dispatch=useDispatch();
    const navigate=useNavigate();

    const handleSubmit=(e)=>{
        e.preventDefault();
        const errorEmail=document.querySelector("#errorEmail")
        const errorPassword=document.querySelector("#errorPassword")

        if(email.length<9){
            errorEmail.className="errorStyle"
            return errorEmail.innerHTML="email error"
        }else{
            errorEmail.className="success"
            errorEmail.innerHTML="email is successfull"
        }

        if(password.length<3){
            errorPassword.className="errorStyle"
            return errorPassword.innerHTML="password error"
        }else{
            errorPassword.className="success"
            errorPassword.innerHTML="password is successfull"
        }

        const data={
            email,
            password
        }

        const user=dispatch(signinAction(data));
        console.log(user);
        navigate("/")

    }
    return (
        <div className="Signin">
            <div className="Signin_content">
                <h1>Connexion</h1>
                <form onSubmit={handleSubmit}>
                    <div className="field">
                        <input 
                            value={email}
                            onChange={(e)=>setEmail(e.target.value)}
                            placeholder='Exemple@gmail.com'
                            type="email" /><br/>
                        <span id="errorEmail"></span>
                    </div>
                    <div className="field">
                        <input 
                            value={password}
                            onChange={(e)=>setPassword(e.target.value)}
                            placeholder='Password'
                            type="password" /><br/>
                        <span id="errorPassword"></span>
                    </div>
                    <button type='submit'>Valide</button>
                </form>
            </div>
        </div>
    );
}

export default Signin;
