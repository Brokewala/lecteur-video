import React, { useEffect, useState } from 'react'
import { BrowserRouter ,Routes ,Route } from "react-router-dom";
import Notfound from './components/404/NotFound';
import Ajoutevideo from './components/AjouteVideo/AjouteVideo';
import Navbar from './components/NavBar/NavBar';
import Header from './components/Header/Header';
import Home from './pages/Home/Home';
import "./App.scss";
import Signin from './pages/Signin/Signin';
import Signup from './pages/Signup/Signup';
import axios from "axios";
import { getOnlyUserAction } from './Actions/video-action';
import { useDispatch } from 'react-redux';
import { AppContext } from './features/AppContext';
import Profil from './pages/Profil/Profil';

const App=()=>{
  const [Uid, setUid] = useState(null);
  const [movie, setMovie] = useState(null);
  const [movieActive, setMovieActive] = useState(false);
  const dispatch=useDispatch();

  useEffect(() => {
   const fetchUser=async ()=>{
      await axios({
        method:"GET",
        url:"http://localhost:5000/jwtId",
        withCredentials:true
      }).then(res=>{
        setUid(res.data);
      }).catch(err=>{
        console.log("no token app");
      })
   }
  fetchUser();
   if(Uid) dispatch(getOnlyUserAction(Uid));

  }, [Uid,setUid,dispatch]);

  const PlayMovie=(value)=>{
    setMovieActive(true)
    setMovie(value)
  }

  return (
    <AppContext.Provider 
      value={{
        Uid,movie,PlayMovie,movieActive,setMovieActive,
      }}
      >
      <div className="App">
        <BrowserRouter>
          <div className="App_content">
            <div className="App_Nav">
              <Navbar/>
            </div>
            <div className="App_Route">
              <Header/>
              <div className="App_Route_content">
                <Routes>
                  <Route exact path="/" element={<Home />} />
                  <Route exact path="/Signin" element={<Signin />} />
                  <Route exact path="/Signup" element={<Signup />} />
                  <Route exact path="/profil" element={<Profil />} />
                  <Route exact path="/ajoute" element={<Ajoutevideo />} />
                  <Route exact path="*" element={<Notfound />} />
                </Routes>
              </div>
            </div>
          </div>
        </BrowserRouter>
      </div>
    </AppContext.Provider>
  );
}



export default App;
