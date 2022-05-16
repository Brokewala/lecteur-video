import React ,{useState} from 'react';
import { useNavigate } from 'react-router-dom';
import { signupAction } from '../../Actions/video-action';
import "./Signup.scss";


const Signup = () => {
    const [nom, setNom] = useState(String);
    const [prenom, setPrenom] = useState(String);
    const [email, setEmail] = useState(String);
    const [password, setPassword] = useState(String);
    const navigate=useNavigate();

    const handleSubmit=(e)=>{
        e.preventDefault();

        const errorNom=document.querySelector("#errorNom");
        const errorPrenom=document.querySelector("#errorPrenom");
        const errorEmail=document.querySelector("#errorEmail");
        const errorPassword=document.querySelector("#errorPassword");

        if(nom.length<=3 || nom.length>20){
            errorNom.className="errorStyle"
            return errorNom.innerHTML="Error , votre nom doit etre entre 3 et 20 caracter";
        }else{
            errorNom.innerHTML="nom is SuccessFull";
            errorNom.className="success"
        }

        if(prenom.length<=3 || prenom.length>20){
            errorPrenom.className="errorStyle"
            return errorPrenom.innerHTML="Error , votre prenom doit etre entre 3 et 20 caracter";
        }else{
            errorPrenom.innerHTML="prenom is SuccessFull";
            errorPrenom.className="success"
        }

        if(email.length<=5 || email.length>20){
            errorEmail.className="errorStyle"
            return errorEmail.innerHTML="Error , votre email doit etre entre 3 et 20 caracter";
        }else{
            errorEmail.innerHTML="email is successFull";
            errorEmail.className="success"
        }

        if(password.length<=3 || password.length>20){
            errorPassword.className="errorStyle"
            return errorPassword.innerHTML="Error , votre password doit etre entre 3 et 20 caracter";
        }else{
            errorPassword.innerHTML="Password is successFull";
            errorPassword.className="success"
        }
        const data={
            nom:nom,
            prenom:prenom,
            email:email,
            password:password
        }
        const user=signupAction(data);
        if(user){
            navigate("/Signin")
        }
        
    }
    return (
        <div className="Signup">
            <h1>Inscription</h1>
            <div className="Signup-content" >
                <form onSubmit={handleSubmit}>
                    <div className="field">
                        <label>Nom:</label><br/>
                        <input 
                            placeholder='Entre votre nom ...'
                            value={nom}
                            onChange={(e)=>setNom(e.target.value)}
                            type="text" /><br/>
                        <span className="errorStyle" id="errorNom"></span>
                    </div>
                    <div className="field">
                        <label>Prenom:</label><br/>
                        <input 
                            value={prenom}
                            onChange={(e)=>setPrenom(e.target.value)}
                            placeholder='Entre votre prenom ...'
                            type="text" /><br/>
                        <span id="errorPrenom"></span>
                    </div>
                    <div className="field">
                        <label>Email:</label><br/>
                        <input 
                            placeholder='Entre votre email ...'
                            value={email}
                            onChange={(e)=>setEmail(e.target.value)}
                            type="email" /><br/>
                        <span id="errorEmail"></span>
                    </div>
                    <div className="field">
                        <label>Mot de passe :</label><br/>
                        <input 
                            placeholder='Entre votre password ...'
                            value={password}
                            onChange={(e)=>setPassword(e.target.value)}
                            type="password" /><br/>
                        <span id="errorPassword"></span>
                    </div>
                    <button type="submit">Valide</button>
                </form>
            </div>
        </div>
    );
}

export default Signup;
