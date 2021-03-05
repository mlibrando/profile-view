import React, {useState} from 'react'
import {makeStyles} from '@material-ui/core';


export  function useForm(initialFieldValues) {

    
    const [values, setValues] = useState(initialFieldValues);

    
    //Using event handler to change input text
    const handleInputChange = e=>{
        const {name, value} = e.target
        setValues({
            ...values,
            [name]:value
        })
    }
    //Reset the forms
    const resetForms = () => {
        setEditMode(!editMode)
        setValues(initialFieldValues);
    }


    //Change State
    const [editMode, setEditMode] = useState(false);

    const changeState = () => {setEditMode(!editMode)}

    //Change Dialog State

    const [open, setOpen] = useState(false);

    const handleClickOpen = () => {
    setOpen(true);
    setEditMode(!editMode)
    }; 
  
     const handleClose = () => {
    setOpen(false);
     };
    
    return {
        values,
        setValues,
        handleInputChange,
        editMode,
        changeState,
        resetForms,
        open,
        handleClickOpen,
        handleClose
    }
        
    
}
    const useStyles = makeStyles(theme => ({

    root: {
        '& .MuiFormControl-root': {
            margin:theme.spacing(1, 'auto'),
            width: '100%',
            padding:theme.spacing(2)
        },

        '& .MuiFormLabel-root': {
            padding:theme.spacing(2.5)
        },

        '& .MuiTypography-root': {
            margin:theme.spacing(0, 2)
        },
        '& .MuiAvatar-root': {
            margin:theme.spacing(2)
        },
        '& .MuiInputBase-root': {
            color: 'rgba(0, 0, 0, 0.87)',
            fontWeight: '300'
        },
        '& .MuiSvgIcon-root': {
            verticalAlign: 'middle',
            width: '1.2em',
            height: '1.2em',
            marginRight: theme.spacing(1)

        }


        
    }

    
    }))




export  function Form(props) {

    const classes = useStyles();

    return (
        
        <form className={classes.root} autoComplete="off">
            {props.children}

        </form>
    )
}

