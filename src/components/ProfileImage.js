import React from 'react';
import { Avatar, makeStyles } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({

    large: {
        width: theme.spacing(20),
        height: theme.spacing(20),
      }

}))

export default function ProfileImage() {
    const classes=useStyles();

    return (
        <Avatar alt="profileImage" src="#" className={classes.large} />
    )
}
