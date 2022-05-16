import { Add, Home,Menu } from '@material-ui/icons';
import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AppContext } from '../../features/AppContext';
import "./NavBar.scss";


const Navbar = () => {
    const { setMovieActive } = useContext(AppContext);

    return (
        <div className="NavBarContent">
            <div className="NavBar_logo">
                <Menu onClick={()=>setMovieActive(false)} className="menu"/>
            </div>
            <div className="Home-body">
                <ul>
                    <li>
                        <Link to="/">
                            <div className="Link">
                                <Home className="homeLogo"/>
                                <p>Home</p>
                            </div>
                        </Link>
                    </li>
                    <li>
                        <Link to="/ajoute">
                            <div className="Link">
                                <Add className="homeLogo"/>
                                <p>Add</p>
                            </div>
                        </Link>
                    </li>
                    <li>
                        <Link to="/Signup">
                            <div className="Link">
                                <Add className="homeLogo"/>
                                <p>Signup</p>
                            </div>
                        </Link>
                    </li>
                    <li>
                    <Link to="/Signin">
                        <div className="Link">
                            <Add className="homeLogo"/>
                            <p>Signin</p>
                        </div>
                    </Link>
                </li>
                </ul>
            </div>
        </div>
    );
}

export default Navbar;
