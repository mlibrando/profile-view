import React from 'react';
import {Button, makeStyles} from '@material-ui/core';

const useStyles = makeStyles(theme => ({
    root: {
        margin: theme.spacing(2)
    },
    label : {
        textTransform: 'none'
    }

}))



export default function ControlButton(props) {

    const { text, size, color, variant, onClick} = props;
    const classes = useStyles();

    return ( 
            <Button
            variant={variant}
            size={size}
            color={color}
            onClick={onClick}
            classes={{root:classes.root, label:classes.label}}
            startIcon={props.startIcon}
            >
                {text}
            </Button>
        
    )
}
