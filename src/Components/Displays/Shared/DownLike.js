import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
// import APIURL from '../../../helpers/enviornment';

const styles = theme => ({
    button: {
        margin: theme.spacing.unit,
    },
    input: {
        display: 'none',
    },
});

const DownLike = (props) => {
    const { classes } = props;
    return(
        <Button color="warning" onClick={() => props.downlike(props.imageId)} className={classes.button}>Unlike</Button>
    )
}

export default withStyles(styles)(DownLike);