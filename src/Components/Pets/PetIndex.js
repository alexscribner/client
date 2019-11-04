import React, { useState } from 'react';
import { Container, Row, Col } from 'reactstrap';
import Pets from './Pets';
import PetCard from './PetCard';
import PetEdit from './PetEdit';
import APIURL from '../../helpers/environment';

const PetIndex = (props) => {
    const [pets, setPets] = useState([]);
    const [updateActive, setUpdateActive] = useState(false);
    const [petToUpdate, setPetToUpdate] = useState({});
    const fetchPets = () => {
        fetch(`${APIURL}/pet/`, {
            method: 'GET',
            headers: new Headers ({
                'Content-Type': 'application/json',
                'Authorization': props.token
            })
        }) .then((res) => res.json())
        .then((createData) => {
            setPets(createData)
        })
    }

    // useEffect(() => {
    //     fetchPets();
    // }, [])

    const editUpdatePet = (pet) => {
        setPetToUpdate(pet);
        console.log(pet);
    }

    const updateOn = () => {
        setUpdateActive(true);
    }

    const updateOff = () => {
        setUpdateActive(false);
    }

    return(
        <Container>
            <Row>
                <Col md="3">
                    <Pets fetchPets={fetchPets} token={props.token} />
                </Col>
                <Col md="9">
                    <PetCard pets={pets} editUpdatePet={editUpdatePet}
                    updateOn={updateOn} fetchPets={fetchPets} token={props.token} />
                </Col>
                {updateActive ? <PetEdit petToUpdate={petToUpdate}
                updateOff={updateOff} token={props.token} fetchPets={fetchPets} /> : <> </>}
            </Row>
        </Container>
    )
}

export default PetIndex;