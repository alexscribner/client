import React from 'react';
// import Pets from '../Pets/Pets';
// import PetCard from '../Pets/PetCard';
import PetIndex from '../Pets/PetIndex';
import './Home.css';


const Home = (props) => {
    // const protectedViews = () => {
    //     return (props.token === localStorage.getItem('token') ? <Pets token={props.token} /> : <PetCard token={props.token}/>)
    // }

    return(
        <div className="homePage">
            <div className="homeTitle">
                <h1>Welcome!</h1>
                <p>You ever get tired of seeing all of the other nonsense on social media?</p>
                <br/>
                 <p> You chose the best place to get your daily dose of all of your friend's furry friends!</p>
            <PetIndex token={props.token}/>
            </div>
        </div>
    )
}
export default Home;