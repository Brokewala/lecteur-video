import React, { useContext } from 'react';
import { useSelector } from 'react-redux';
import { getAllUserSlice } from '../../features/AllVideo';
import { AppContext } from '../../features/AppContext';
import Videoplaynav from '../VideoPlayNav/VideoPlayNav';
import "./VideoPlay.scss";

const Videoplay = () => {
    const user = useSelector( getAllUserSlice);
    const { movie } = useContext(AppContext);

    return (
        <div className="Videoplay">
            <div className="Videoplay_Right">
                <video controls loop autoPlay muted src={movie.video}></video>
                <p>{movie.videoLegend}</p>
            </div>
            <div className="Videoplay_Left">
                {
                    user[0]!==undefined && user.map((value,index)=>(
                        <div className="HomeVideo_content" key={index}>                  
                            <Videoplaynav value={value}/>
                        </div>
                    ))
                }
            </div>
        </div>
    );
}

export default Videoplay;
