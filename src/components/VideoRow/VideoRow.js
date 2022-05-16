import React, { useContext } from 'react';
import "./VideoRow.scss";
import {Link} from "react-router-dom";
import { AppContext } from '../../features/AppContext';

const Videorow = ({value}) => {
    const {PlayMovie} = useContext(AppContext);

    return (
        <>
        {
            value.videos[0]!==undefined && (
                <div className="Videorow">
                {
                    value.videos.map((item,index)=>(
                        <div key={index} className="Videorow_Row">
                            <div className="Videorow_title">
                                <img src="./assets/logoP.jpg" alt="logo" />
                                <Link to="/profil">
                                    <p>{value.nom} {value.prenom}</p>
                                </Link>
                            </div>
                            <div className="Videorow_Body" >       
                                <video 
                                    onClick={()=>PlayMovie(item)}
                                    autoPlay 
                                    loop 
                                    muted   
                                    src={item.video}></video>
                            </div>
                            <div className="Videorow_footer">
                               
                            </div>
                        </div>
                    ))
                }
                </div>
            )
        }
        </>
    );
}

export default Videorow;
