import React, { useState } from 'react';
import APIURL from '../../helpers/environment';
import './PetModal.css';
// import FeedImage from '../Displays/Feed/FeedImage';
import { makeStyles } from '@material-ui/core/styles';
import Modal from '@material-ui/core/Modal';
import { Backdrop } from '@material-ui/core';
import Fade from '@material-ui/core/Fade';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import GenderButton from '../Buttons/GenderButton/GenderButton';

const useStyles = makeStyles(theme => ({
    modal: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: '1em',
    },
    paper1: {
        backgroundColor: '#00CCCC',
        border: '2px solid #000',
        boxShadow: theme.shadows[5],
        padding: theme.spacing(2, 4, 3),
        width: 400,
        margin: 'auto',
        height: 600
    },
    button: {
        margin: 400,
        backgroundColor: '#00CCCC',
        width: 250,
        color: 'white',
        border: '1.2px groove #00468C',
        textShadow: '1px 1px 0 #00468C, 1px 1px 0 #00468C, 2px 2px 0 #00468C, 1px 1px 0 #00468C'
    },
    button1: {
        backgroundColor: '#00CCCC',
        color: 'white'
    },
    card: {
        maxWidth: 300,
        margin: 30,
        textAlign: 'center'
    },
    media: {
        height: 0,
        paddingTop: '56.25%', // 16:9
    }
    }));


const Pets = (props) => {
    const classes = useStyles();
    const [open, setOpen] = useState(false);
    const [nameOfPet, setNameOfPet] = useState('');
    const [typeOfPet, setTypeOfPet] = useState('');
    const [breedOfPet, setBreedOfPet] = useState('');
    const [genderOfPet, setGenderOfPet] = useState('');
    const [ageOfPet, setAgeOfPet] = useState('');
    const [ownerOfPet, setOwnerOfPet] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        fetch(`${APIURL}/pet/create`, {
            method: 'POST',
            body: JSON.stringify({create: {nameOfPet: nameOfPet, typeOfPet: typeOfPet, breedOfPet: breedOfPet, genderOfPet: genderOfPet,
            ageOfPet: ageOfPet, ownerOfPet: ownerOfPet}}),
            headers: new Headers ({
                'Content-Type': 'application/json',
                'Authorization': props.token
            })
        }).then((res) => res.json())
        .then((createData) => {
            console.log(createData);
            setNameOfPet('');
            setTypeOfPet('');
            setBreedOfPet('');
            setGenderOfPet('');
            setAgeOfPet('');
            setOwnerOfPet('');
            props.fetchPets();
        })
    }

    const handleOpen = () => {
        setOpen(true);
    };
    const handleClose = () => {
        setOpen(false);
    };

    return(
        <>
            <Button variant="contained" component="span" className={classes.button} onClick={handleOpen}>
                <Typography>Add Pet Here!</Typography>
            </Button>
            <Modal
                aria-labelledby="transition-modal-title"
                aria-describedby="transition-modal-description"
                className={classes.modal}
                open={open}
                onClose={handleClose}
                closeAfterTransition
                BackdropComponent={Backdrop}
                BackdropProps={{
                timeout: 500,
                }}
            >
                <Fade in={open}>
                <div className={classes.paper1}>
                    <form>
                        <h2 id="transition-modal-title">Add Your Pet!</h2>
                        <br/>
                            {/* <FeedImage />                         */}
                            <label className="display-block-upload" htmlFor="nameOfPet">Name</label>
                            
                            <input className="display-block-upload-input" onChange={(e) => setNameOfPet(e.target.value)} name="nameOfPet" value={nameOfPet} />
                            {/* <br/>
                            <br/> */}
                            <label className="display-block-upload" htmlFor="typeOfPet">What kind of Pet?</label>
                            
                            <input className="display-block-upload-input" onChange={(e) => setTypeOfPet(e.target.value)} name="typeOfPet" value={typeOfPet} />
                            {/* <br/>
                            <br/> */}
                            <label className="display-block-upload" htmlFor="">Boy or Girl?</label>
                            
                            <GenderButton />
                            {/* <br/>
                            <br/> */}
                            <label className="display-block-upload" htmlFor="breedOfPet">Breed?</label>
                            
                            <input className="display-block-upload-input" onChange={(e) => setBreedOfPet(e.target.value)} name="breedOfPet" value={breedOfPet} />
                            {/* <br/>
                            <br/> */}
                            <label className="display-block-upload" htmlFor="ageOfPet">How Old?</label>
                            
                            <input className="display-block-upload-input" onChange={(e) => setAgeOfPet(e.target.value)} name="ageOfPet" value={ageOfPet} />
                            {/* <br/>
                            <br/> */}
                            <label className="display-block-upload" htmlFor="ownerOfPet">Who is the Owner?</label>
                            
                            <input className="display-block-upload-input" onChange={(e) => setOwnerOfPet(e.target.value)} name="ownerOfPet" value={ownerOfPet} />
                            {/* <br/>
                            <br/>                      */}
                        <button onSubmit={handleSubmit} className="submitButton" type="submit">Post It!</button>
                </form>
            </div>
            </Fade>
        </Modal> 
        </>
    )
}

export default Pets;