import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import APIURL from '../../../helpers/environment';

const styles = theme => ({
    button: {
        margin: theme.spacing.unit,
    },
    input: {
        display: 'none',
    },
});

class PostImage extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            file: '',
            toggle: false
        }
    }

    handleClick = () => {
        let upload = document.getElementById('upload')
        let formData = new FormData();
        formData.append('image', upload.files[0]);

        let url = APIURL + '/images/upload'
        let token = localStorage.getItem('token');
        console.log(token)
        fetch(url, {
            method: 'POST',
            headers: {
                'Authorization': token
            },
            body: formData
        })
            .then(response => response.json())
            .then(data => {
                this.props.fetchImages();
                this.setState({
                    toggle: false
                })
            })
            .catch(err => console.log("Error:" + err))
    }

    hadnleToggle = () => {
        this.setState({
            toggle: !this.state.toggle
        })
    }

    render(){
        const { classes } = this.props;
        const show = !this.state.toggle ? <div></div> : 
        <div>
            <input
                accept="image/*"
                className={classes.input}
                id="upload"
                multiple
                type="file"
                />
                <label htmlFor="upload">
                    <Button variant="outlined" component="span" className={classes.button}>Choose Image</Button>
                </label>
                <Button variant="outlined" color="primary" onClick={this.handleClick} className={classes.button}>Add Picture</Button>
        </div>
        return(
            <div>
                <Button variant="outlined" color="primary" onClick={this.handleToggle} className={classes.button}>New Picture
                </Button>
                {show}
            </div>
        )
    }
}

PostImage.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(PostImage);