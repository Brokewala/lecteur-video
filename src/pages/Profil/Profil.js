import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import Updateprofil from '../../components/UpdateProfil/UpdateProfil';
import { getVideoAll } from '../../features/videoSlice';
import "./Profil.scss"

const Profil = () => {
    const user=useSelector(getVideoAll);
    const [activeUpdate, setActiveUpdate] = useState(false);

    return (
        <div className="Profil">
            {
                !activeUpdate && (
                    <>
                        <button onClick={()=>setActiveUpdate(true)}>update</button>
                        <div className="Profil_content">
                            <div className="image_content">
                                <img className="logoProfil" src="./assets/logoP.jpg" alt="logo" />
                            </div>
                            <div className="propos_content">
                                <div>Nom: {user.nom}</div>
                                <div>Prenom: {user.prenom}</div>
                                <div>Email: {user.email}</div>
                            </div>
                        </div>
                    </>
                )
            }

            {
                activeUpdate && <Updateprofil/>
            }
        </div>
    );
}

export default Profil;
