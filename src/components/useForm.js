import React, {useState} from 'react'
import {makeStyles} from '@material-ui/core';


export  function useForm(initialFieldValues) {

    //Initialize useEffect
    const [values, setValues] = useState(initialFieldValues);

    
    //Using synthetic event handler
    const handleInputChange = e=>{
        const {name, value} = e.target
        setValues({
            ...values,
            [name]:value
        })
    }

    return {
        values,
        setValues,
        handleInputChange
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

