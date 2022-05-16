import React, { useContext, useEffect }  from 'react';
import "./Home.scss";
import Homevideo from "../../components/HomeVideo/HomeVideo";
import { useDispatch } from 'react-redux';
import { AppContext } from '../../features/AppContext';
import { AllUserAction, getOnlyUserAction } from '../../Actions/video-action';
import "./Home.scss";
import Videoplay from "../../components/VideoPlay/VideoPlay";

const Home = () => {
    
    const {Uid,movieActive} = useContext(AppContext);
    const dispatch=useDispatch()
   
    useEffect(() => {
        const homeEffect=()=>{
            dispatch(getOnlyUserAction(Uid))
            dispatch(AllUserAction());
        }
        homeEffect()
    }, [Uid,dispatch]);

    return (
        <div className='Home'>
            <div className="Home_content">
                {!movieActive && <Homevideo/>}
                {movieActive && <Videoplay/>}
            </div>
        </div>
    );
}

export default Home;
