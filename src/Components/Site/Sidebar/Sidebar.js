import React from 'react';
import {
    Route,
    Link,
    Switch
} from 'react-router-dom';
import './Sidebar.css';
import Profile from '../Profile';
import Feed from '../Feed';
import profile from '../../Assets/profile.png';
import pawIcon from '../../Assets/pawIcon.png';
import homeIcon from '../../Assets/homeIcon.png';


const Sidebar = () => {
    return(
        <div className="sidebar" >
            <div className="sidebar-list-styling">
                <ul className="sidebar-list list-unstyled">
                    <li>
                        <Link to ="/home"></Link>
                        <img src={homeIcon} alt="home icon"/>
                    </li>
                    <li>
                        <Link to="/profile"></Link>
                        <img src={profile} alt="profile icon" />
                    </li>
                    <br />
                    <li>
                        <Link to="/feed"></Link>
                        <img src={pawIcon} alt="feed" />
                    </li>
                    <br />
                </ul>
            </div>
            <div className="sidebar-route">
                <Switch>
                    <Route exact path="/profile"><Profile /></Route>
                    <Route exact path="/feed"><Feed /></Route>
                </Switch>
            </div>
        </div>
    )
}

export default Sidebar;