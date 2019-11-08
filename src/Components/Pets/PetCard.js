import React, {useState, useEffect} from 'react';
import './PetCard.css';
import APIURL from '../../helpers/environment';
import LikeButton from '../Buttons/LikeButton/LikeButton';
// import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

// const useStyles = makeStyles({
//     card: {
//       maxWidth: 200,
//       backgroundColor: '#00CCCC',
//       color: 'white',
//       border: '2px groove #00468C',
//       borderRadius: '5px'
//     },
//     media: {
//       height: 200,
//     },
//   });



const PetCard = (props) => {
    const [clicks, setClicks]= useClicks(0);

    console.log(props);
    const deletePet = (pet) => {
        fetch(`${APIURL}/pet/${pet.id}`,{
            method: 'DELETE',
            headers: new Headers({
                'Content-Type': 'application/json',
                'Authorization': props.token
            })
        })
        .then(() => props.fetchPets())
    }

    
    
    

    const petMapper = () => {
        return props.pets.map((pet, index) => {
            return(
                <Card className="petResult" key={index}>
                    <CardActionArea>
                    <CardMedia
                        className="petPic"
                        image="https://www.randomdoggiegenerator.com/"
                        title={pet.nameOfPet}
                    />
                <CardContent>
                    <Typography gutterBottom className="cardTitle" variant="h5" component="h2">
                        {pet.nameOfPet}
                    </Typography>
                    <Typography className="cardBody" variant="body2" color="textSecondary" component="p">
                        {pet.typeOfPet}
                        <br/>
                        {pet.breedOfPet}
                        <br/>
                        {pet.genderOfPet}
                        <br/>
                        {pet.ageOfPet}
                        <br/>
                        {pet.ownerOfPet}
                    </Typography>
                    </CardContent>
                </CardActionArea>
                <CardActions>
                <Button type="submit" color="primary" onClick={() => {props.editUpdatePet(pet); props.updateOn()}}>Update</Button>
                <Button type="submit" color="secondary" onClick={() => {deletePet(pet)}}>Delete :(</Button>
                <LikeButton onClick={() => setClicks(clicks + 1)} /> 
                </CardActions>
                </Card>
            )
        })
    }

    return(
        <>
        {petMapper()}
        </>
      )
}

const useClicks = (initCount) => {
    const [clicks, setClicks] = useState(initCount);
    
    useEffect(() => {
        document.title = `${clicks} likes`;
    }, [clicks])
    return [clicks, setClicks]
}

export default PetCard;