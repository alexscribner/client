import React from 'react';
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

class UpdateImage extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            toggle: false,
            imageId: this.props.imageId
        }
    }

    handleClick = () => {
        let upload = document.getElementById('updateUpload');
        let url = APIURL + `/images/${this.state.imageId}`;
        let token = localStorage.getItem('token');
        let formData = new formData();
        formData.append('image', upload.files[0])

        fetch(url, {
            method: 'PUT',
            headers: {
                'Authorization': token
            },
            body: formData
        })
            .then(response => response.json())
            .then(data => {
                console.log("before fetch");
                this.props.fetchImages();
            })
            .catch(err => console.log(err));
    }

    handleToggle = () => {
        this.setState({
            toggle: !this.state.toggle
        })
    }

    render() {
        const { classes } = this.props;
        const update = !this.state.toggle ? <div></div> :
        <div>
            <input
                accept="image/*"
                className={classes.input}
                id="updateUpload"
                multiple
                type="file"
            />
            <label htmlFor="updateUpload">
                <Button variant="outlined" component="span" className={classes.button}>Choose Photo</Button>
            </label>
            <Button variant="outlined" color="primary" onClick={this.handleClick} className={classes.button}>Update</Button>
        </div>
        return(
            <div>
                <Button variant="outlined" color="primary" onClick={this.handleToggle} className={class.button}>Update Photo</Button>
                {update}
            </div>
        )
    }
}

export default withStyles(styles)(UpdateImage);