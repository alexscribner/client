import React, { useState } from 'react';
import APIURL from '../../helpers/environment';
import { Button, Form, FormGroup, Label, Input, Modal, ModalHeader, ModalBody } from 'reactstrap';

const PetEdit = (props) => {
    const [editName, setEditName] = useState(props.petToUpdate.nameOfPet);
    const [editType, setEditType] = useState(props.petToUpdate.typeOfPet);
    const [editBreed, setEditBreed] = useState(props.petToUpdate.breedOfPet);
    const [editGender, setEditGender] = useState(props.petToUpdate.genderOfPet);
    const [editAge, setEditAge] = useState(props.petToUpdate.ageOfPet);
    const [editOwner, setEditOwner] = useState(props.petToUpdate.ownerOfPet);

    const petUpdate = (event, pet) => {
        event.preventDefault();
        fetch(`${APIURL}/pet/${props.pet}`, {
            method: 'PUT',
            body: JSON.stringify({create: {nameOfPet: editName, typeOfPet: editType, breedOfPet: editBreed, genderOfPet: editGender,
                ageOfPet: editAge, ownerOfPet: editOwner}}),
            headers: new Headers ({
                'Content-Type': 'appliation/json',
                'Authorization': props.token
            })
        }).then((res) => {
            props.fetchPets();
            props.updateOff();
        })
    }

    return(
        <Modal isOpen={true}>
           <ModalHeader>Log a Workout</ModalHeader>
           <ModalBody>
               <Form onSubmit={petUpdate}>
                   <FormGroup>
                       <Label htmlFor="nameOfPet">Edit Pets Name:</Label>
                       <Input name="nameOfPet" value={editName} onChange={(e) => setEditName(e.target.value)} />
                   </FormGroup>
                   <FormGroup>
                       <Label htmlFor="typeOfPet">Edit Type:</Label>
                       <Input name="typeOfPet" value={editType} onChange={(e) => setEditType(e.target.value)} />
                   </FormGroup>
                   <FormGroup>
                       <Label htmlFor="breedOfPet">Edit Breed:</Label>
                       <Input name="breedOfPet" value={editBreed} onChange={(e) => setEditBreed(e.target.value)} />
                   </FormGroup>
                   <FormGroup>
                       <Label htmlFor="genderOfPet">Edit Gender:</Label>
                       <Input name="genderOfPet" value={editGender} onChange={(e) => setEditGender(e.target.value)} />
                   </FormGroup>
                   <FormGroup>
                       <Label htmlFor="ageOfPet">Edit Age:</Label>
                       <Input name="ageOfPet" value={editAge} onChange={(e) => setEditAge(e.target.value)} />
                   </FormGroup>
                   <FormGroup>
                       <Label htmlFor="ownerOfPet">Edit The Owner:</Label>
                       <Input name="breedOfPet" value={editOwner} onChange={(e) => setEditOwner(e.target.value)} />
                   </FormGroup>
                    <Button type="submit">Update Your Pet!</Button>
               </Form>
           </ModalBody>
       </Modal>
    )
}

export default PetEdit;