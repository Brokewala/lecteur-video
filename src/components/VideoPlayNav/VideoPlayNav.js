import React from 'react';
import { Link } from 'react-router-dom';
import "./VideoPlayNav.scss";


const Videoplaynav = ({value}) => {
    return (
        <div className="Videoplaynav">
            {
                value.videos.map((item,index)=>(
                    <div key={index} className="Videoplaynav_Row">
                        <div className="Videoplaynav_title">
                            <img src="./assets/logoP.jpg" alt="logo" />
                            <Link to="/profil">
                                <p>{value.nom} {value.prenom}</p>
                            </Link>
                        </div>
                        <div className="Videoplaynav_Body" >       
                            <video 
                                autoPlay 
                                loop 
                                muted   
                                src={item.video}></video>
                        </div>
                    </div>
                ))
            }
        </div>
    );
}

export default Videoplaynav;
