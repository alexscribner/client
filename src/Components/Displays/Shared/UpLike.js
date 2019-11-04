import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';

const styles = theme => ({
    button: {
        margin: theme.spacing.unit,
    },
});

const UpLike = (props) => {
    const { classes } = props;
    return(
        <Button color="primary" onClick={() => props.uplike(props.imageId)} className={classes.button}>Like</Button>
    )
}
export default withStyles(styles)(UpLike);