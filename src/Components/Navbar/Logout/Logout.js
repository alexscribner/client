import React from 'react';
import './Logout.css';
import logout from '../../Assets/logout.png';


const Logout = (props) => {
    return(
        <div>
            <img className="logout-img" src={logout} alt="logout button" onClick={props.clearToken} />
        </div>
    )
}

export default Logout;