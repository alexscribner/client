import React from 'react';
import Pets from '../Pets/Pets';
import './Home.css';


const Home = () => {
    return(
        <div className="homePage">
            <div className="homeTitle">
                <h1>Welcome!</h1>
                <p className="pageText">You ever get tired of seeing all of the other nonsense on social media? You chose
                    the best place to get your daily dose of all of your friend's furry friends!
                </p>
            <Pets />  
            </div>
        </div>
    )
}
export default Home;