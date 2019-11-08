import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Fab from '@material-ui/core/Fab';
import FavoriteIcon from '@material-ui/icons/Favorite';

const useStyles = makeStyles(theme => ({
  fab: {
    margin: theme.spacing(1),
  },
  extendedIcon: {
    marginRight: theme.spacing(1),
  },
}));

const LikeButton = () => {
  const classes = useStyles();

  return (
    <div>
      <Fab color="primary" aria-label="like" className={classes.fab}>
        <FavoriteIcon />
      </Fab>
    </div>
  );
}
export default LikeButton;