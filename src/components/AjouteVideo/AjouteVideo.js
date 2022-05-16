import React, { useContext, useState } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { addVideoAction } from '../../Actions/video-action';
import { AppContext } from '../../features/AppContext';
import "./AjouteVideo.scss";

const Ajoutevideo = () => {
    const [legend, setLegend] = useState(String);
    const [video, setVideo] = useState(null);
    const dispatch=useDispatch();
    const {Uid} = useContext(AppContext);
    const navigate=useNavigate();

    const handleVideo=(e)=>{
        setVideo(e.target.files[0]);
    }

    const handleVideoAdd=(e)=>{
        e.preventDefault();

        const errorLegend=document.querySelector("#errorLegend");
        const errorVideo=document.querySelector("#errorVideo");

        if(legend.length<=0){
            errorLegend.className="errorStyle"
            return errorLegend.innerHTML="legend est vide"
        }else{
            errorLegend.className="success"
            errorLegend.innerHTML="Successfull"
        }

        if(video===null){
            errorVideo.className="errorStyle"
            return errorVideo.innerHTML="Video est vide"
        }else{
            errorVideo.className="success"
            errorVideo.innerHTML="Successfull"
        }

        const data=new FormData();
        data.append("legend",legend);
        data.append("video",video)
        if(Uid){ 
            dispatch(addVideoAction(Uid,data));
            navigate("/")
        }

    }
    return (
        <div className="Ajoutevideo">
            <h1>Ajoute nouvelle video</h1>
            <div className="Ajoutevideo_content">
                <form onSubmit={handleVideoAdd}>
                    <div className="field">
                        <label htmlFor='legend'>Entre la legend</label><br/>
                        <textarea
                            value={legend}
                            onChange={(e)=>setLegend(e.target.value)}
                            cols="35" 
                            rows="5"></textarea><br/>
                        <span id="errorLegend"></span>
                    </div>
                    <div className="field">
                        <label htmlFor='video'>Entre le video</label><br/>
                        <input 
                            name='video' 
                            onChange={handleVideo}
                            accept='video/mp4'
                            type="file" /> <br/>
                        <span id="errorVideo"></span>
                    </div>
                    <button type='submit'>Vailde</button>
                </form>
            </div>
        </div>
    );
}

export default Ajoutevideo;
