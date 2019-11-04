import React, { useState } from 'react';
import '../Auth/Auth.css';
import APIURL from '../../helpers/environment';


const Auth = (props) => {
    let [login, setLogin] = useState(false);
    let [firstname, setFirstName] = useState('');
    let [lastname, setLastName] = useState('');
    let [username, setUserName] = useState('');
    let [email, setEmail] = useState('');
    let [password, setPassword] = useState('');

    let changeLogin = (e) => {
        e.preventDefault();
        setLogin(!login);

        setFirstName('');
        setLastName('')
        setEmail('');
        setUserName('');
        setPassword('');
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        const url = login ? `${APIURL}/user/login` : `${APIURL}/user/signup`;
        
        fetch(url, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                firstname: firstname,
                lastname: lastname,
                username: username,
                email: email,
                password: password
            })
        }).then( res => res.json())
        .then(data => {
            console.log(data.sessionToken);
            props.updateToken(data.sessionToken)
        })
    }




    return(
        <form onSubmit={e => handleSubmit(e)} className="card-like">
        <h1 className="titleAuth">{ login ? 'Log In' : 'Sign Up'}</h1>
        <input className="display-block-input" type="text" name="username" value={username} placeholder="Username" onChange={(e) => setUserName(e.target.value)} />
        {/* <label className="display-block" htmlFor="password">Password</label> */}
        <input className="display-block-input" type="password" name="password" value={password} placeholder="Password" onChange={(e) => setPassword(e.target.value)} />
    {
        login ? null :
            <React.Fragment>      
                {/* <label className="display-block" htmlFor="firstname">First Name</label> */}
                <input className="display-block-input" type="text" name="firstname" value={firstname} placeholder="First Name" onChange={(e) => setFirstName(e.target.value)} />
                {/* <label className="display-block" htmlFor="lastname">Last Name</label> */}
                <input className="display-block-input" type="text" name="lastname" value={lastname} placeholder="Last Name"  onChange={(e) => setLastName(e.target.value)} />
                {/* <label className="display-block" htmlFor="email">Email</label> */}
                <input className="display-block-input" type="text" name="email" value={email} placeholder="Email" onChange={(e) => setEmail(e.target.value)} />
            </React.Fragment>
    }
    <button className="button" onClick={(e) => changeLogin(e)}>{ login ? 'Sign Up' : 'Already have an account? Log In' }</button>
    <button className="button" type="submit" >Submit</button>
    </form>
    )
}

export default Auth;