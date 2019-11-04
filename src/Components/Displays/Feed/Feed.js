import React from 'react';
import FeedImage from './FeedImage';
import APIURL from '../../../helpers/environment';

class Feed extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            images: []
        }
    }

    componentDidMount() {
        this.fetchImages();
    }

    fetchImages = () => {
        let url = APIURL + '/images/all';

        fetch('http://localhost:3001/pet/', {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': localStorage.getItem('token')
            }
        })
        .then(response => response.json())
        .then(images => {
            this.setState({
                images: images.images
            })
        })
        .catch(err => console.log(err));
    }

    downlike = (id) => {
        let url = APIURL + `/images/down/${id}`;

        fetch(url, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': localStorage.getitem('token')
            }
        })
        .then(() => this.fetchImages())
        .catch(err => console.log(err))
    }

    uplike = (id) => {
        let url = APIURL + `/images/up/${id}`;

        fetch(url, {
            method: 'PUT',
            headers: {
                'Content-Type' : 'application/json',
                'Authorization': localStorage.getItem('token')
            }
        })
        .then(() => this.fetchImages())
        .catch(err => console.log(err))
    }

    render(){
        const images = this.state.images;
        const displayImages = images.length > 0 ? images.map(image => {
            return <FeedImage image={image} key={image.id} fetchImages={this.fetchImages} uplike={this.uplike} downlike={this.downlike} />
        })
        : <div></div>

        return(
            <div>
                {displayImages}
            </div>
        )
    }
}
export default Feed;