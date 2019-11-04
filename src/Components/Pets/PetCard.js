import React from 'react';
import APIURL from '../../helpers/environment';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles({
    card: {
      maxWidth: 345,
      backgroundColor: '#00CCCC',
      color: 'white',
      border: '2px groove #00468C',
      borderRadius: '5px'
    },
    media: {
      height: 140,
    },
  });

const PetCard = (props) => {
    const classes = useStyles();
    const deletePet = (pet) => {
        fetch(`${APIURL}/pets/${pet.id}`,{
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
                <Card className={classes.card} key={index}>
                    <CardActionArea>
                    <CardMedia
                        className={classes.media}
                        image=""
                        title={pet.nameOfPet}
                    />
                <CardContent>
                    <Typography gutterBottom variant="h5" component="h2">
                        {pet.nameOfPet}
                    </Typography>
                    <Typography variant="body2" color="textSecondary" component="p">
                        {pet.breedOfPet}
                        <br/>
                        {pet.ageOfPet}
                        <br/>
                        {pet.weightOfPet}
                        <br/>
                        {pet.ownerOfPet}
                    </Typography>
                    </CardContent>
                </CardActionArea>
                <CardActions>
                <Button color="warning" onClick={() => {props.editUpdatePet(pet); props.updateOn()}}>Update</Button>
                        <Button color="danger" onClick={() => {deletePet(pet)}}>Delete</Button> 
                </CardActions>
                </Card>
            )
        })
    }
}

export default PetCard;