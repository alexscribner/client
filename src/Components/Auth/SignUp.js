import React, { useState } from 'react';
import {Form, FormGroup, Label, Input, Button} from 'reactstrap';
import APIURL from '../../helpers/environment';

const SignUp = (props) => {
    const [firstname, setFirstName] = useState('');
    const [lastname, setLastName] = useState('');
    const [email, setEmail] = useState('');
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const handleSubmit = (event) => {
        event.preventDefault();
        fetch(`${APIURL}/user/signup`, {
            method: 'POST',
            body: JSON.stringify({ user: {firstname: firstname, lastname: lastname, email: email, username: username, password :password}}),
            headers: new Headers({
                'Content-Type': 'application/json'
            })
        }) .then(
            (response) => response.json()
        ).then((data) => {
            props.updateToken(data.sessionToken)
        })
    }
    return(
        <div>
            <h1>Sign Up</h1>
            <Form onSubmit={handleSubmit}>
                <FormGroup>
                    <Label htmlFor="firstname">First Name</Label>
                    <Input onChange={(e) => setFirstName(e.target.value)} name="firstname" value={firstname}/>
                </FormGroup>
                <FormGroup>
                    <Label htmlOfr="lastname">Last Name</Label>
                    <Input onChange={(e) => setLastName(e.target.value)} name="lastname" value={lastname}/>
                </FormGroup>
                <FormGroup>
                    <Label htmlFor="email">Email</Label>
                    <Input onChange={(e) => setEmail(e.target.value)} name="email" value={email}/>
                </FormGroup>
                <FormGroup>
                    <Label htmlFor="username">Username</Label>
                    <Input onChange={(e) => setUsername(e.target.value)} name="username" value={username}/>
                </FormGroup>
                <FormGroup>
                    <Label htmlFor="password">Password</Label>
                    <Input onChange={(e) => setPassword(e.target.value)} name="password" value={password} />
                </FormGroup>
                <Button type="submit">Sign Up</Button>
            </Form>
        </div>
    )
}

export default SignUp;