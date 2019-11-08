import React from 'react';
import './Navbar.css';
import Logout from './Logout/Logout';
import pawIcon from '../Assets/pawIcon.png';
import menu from '../Assets/menu.png';
import profile from '../Assets/profile.png';
import homeIcon from '../Assets/homeIcon.png';



const Navbar = (props) => {
    return(
        <nav>
            <div className="navbar">
            <div className="dropdown">
                <button className="dropbtn"><img className="nav-img" src={menu} alt="imagine something here" />  
                    <i className="fa fa-caret-down"></i>
                </button>
            <div className="dropdown-content">
                <a href="#home"><img className="nav-link-img" src={homeIcon} alt="imagine something here" /></a>
                <a href="#profile"><img className="nav-link-img" src={profile} alt="imagine something here" /></a>
                <a href="#feed"><img className="nav-link-img" src={pawIcon} alt="imagine something here" /></a>
                <a href="#logout"><Logout clearToken={props.clearToken} /></a>
            </div>
        </div>
        </div>  
            <h1 className="title">Pawsagram</h1>
        </nav>
    )
}
export default Navbar;