import React from 'react';
import { useSelector } from 'react-redux';
import { getAllUserSlice } from '../../features/AllVideo';
import Videorow from '../VideoRow/VideoRow';
import "./HomeVideo.scss";

const Homevideo = () => {
    const user = useSelector( getAllUserSlice);

    return (
        <div className="Homevideo">
            {
                user[0]!==undefined && user.map((value,index)=>(
                    <div className="HomeVideo_content" key={index}>
                        <Videorow  value={value} />                   
                    </div>
                ))
            }
        </div>
    );
}

export default Homevideo;
