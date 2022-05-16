import React from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { getVideoAll } from '../../features/videoSlice';
import Searchvideo from '../SearchVideo/SearchVideo';
import "./Header.scss";

const Header = () => {
    const user=useSelector(getVideoAll);
    return (
        <div className="Header">
            <h1>BrokeVideo</h1>
            <Searchvideo/>
            <div className="profil">
                <Link to="/profil">
                    <p>{user.nom} {user.prenom}</p>
                </Link>
            </div>
        </div>
    );
}

export default Header;
