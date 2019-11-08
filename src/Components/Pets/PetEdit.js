import React, { useState } from 'react';
import APIURL from '../../helpers/environment';
import {Button, Form, FormGroup, Label, Input, Modal, ModalHeader, ModalBody} from 'reactstrap';
import './PetEdit.css';
import GenderButton from '../Buttons/GenderButton/GenderButton';

// const useStyles = makeStyles(theme => ({
//     modal: {
//         display: 'flex',
//         alignItems: 'center',
//         justifyContent: 'center',
//         marginTop: '1em',
//     },
//     paper1: {
//         backgroundColor: '#00CCCC',
//         border: '2px solid #000',
//         boxShadow: theme.shadows[5],
//         padding: theme.spacing(2, 4, 3),
//         width: 400,
//         margin: 'auto',
//         height: 600
//     },
//     button: {
//         margin: 400,
//         backgroundColor: '#00CCCC',
//         width: 250,
//         color: 'white',
//         border: '1.2px groove #00468C',
//         textShadow: '1px 1px 0 #00468C, 1px 1px 0 #00468C, 2px 2px 0 #00468C, 1px 1px 0 #00468C'
//     },
//     button1: {
//         backgroundColor: '#00CCCC',
//         color: 'white'
//     },
//     card: {
//         maxWidth: 300,
//         margin: 30,
//         textAlign: 'center'
//     },
//     media: {
//         height: 0,
//         paddingTop: '56.25%', // 16:9
//     }
//     }));

const PetEdit = (props) => {
    const [editName, setEditName] = useState(props.petToUpdate.nameOfPet);
    const [editType, setEditType] = useState(props.petToUpdate.typeOfPet);
    const [editBreed, setEditBreed] = useState(props.petToUpdate.breedOfPet);
    const [editGender, setEditGender] = useState(props.petToUpdate.genderOfPet);
    const [editAge, setEditAge] = useState(props.petToUpdate.ageOfPet);
    const [editOwner, setEditOwner] = useState(props.petToUpdate.ownerOfPet);

    console.log(props)

    const petUpdate = (event, pet) => {
        event.preventDefault();
        fetch(`${APIURL}/pet/${props.petToUpdate.id}`, {
            method: 'PUT',
            body: JSON.stringify({nameOfPet: editName, typeOfPet: editType, breedOfPet: editBreed, genderOfPet: editGender,
                ageOfPet: editAge, ownerOfPet: editOwner}),
            headers: new Headers ({
                'Content-Type': 'application/json',
                'Authorization': props.token
            })
        }).then((res) => {
            props.fetchPets();
            props.updateOff();
        })
    }

    return(
    <Modal className="editModal" isOpen={true}>
           <ModalHeader className="header">Update Your Pets Information</ModalHeader>
           <ModalBody>
               <Form className="updateForm" onSubmit={petUpdate}>
                   <FormGroup>
                       <Label className="tags" htmlFor="nameOfPet">Edit Name:</Label>
                       <Input className="inputs" name="nameOfPet" value={editName} onChange={(e) => setEditName(e.target.value)} />
                   </FormGroup>
                   <FormGroup>
                       <Label className="tags" htmlFor="typeOfPet">Edit Type:</Label>
                       <Input className="inputs" name="typeOfPet" value={editType} onChange={(e) => setEditType(e.target.value)} />
                   </FormGroup>
                   <FormGroup>
                       <Label className="tags" htmlFor="breedOfPet">Edit Breed:</Label>
                       <Input className="inputs" name="breedOfPet" value={editBreed} onChange={(e) => setEditBreed(e.target.value)} />
                   </FormGroup>
                   <FormGroup>
                       <Label className="tags" htmlFor="genderOfPet">Edit Gender:</Label>
                       <GenderButton />
                   </FormGroup>
                   <FormGroup>
                       <Label className="tags" htmlFor="ageOfPet">Edit Age:</Label>
                       <Input className="inputs" name="ageOfPet" value={editAge} onChange={(e) => setEditAge(e.target.value)} />
                   </FormGroup>
                   <FormGroup>
                       <Label className="tags" htmlFor="ownerOfPet">Edit Owner:</Label>
                       <Input className="inputs" name="ownerOfPet" value={editOwner} onChange={(e) => setEditOwner(e.target.value)} />
                   </FormGroup>
                    <Button className="button" type="submit">Update Your Pet!</Button>
               </Form>
           </ModalBody>
       </Modal>
    )
    }
export default PetEdit;