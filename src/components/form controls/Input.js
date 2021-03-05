import { TextField } from '@material-ui/core';


export default function Input(props) {

    const {name, label, value, onChange, type} = props;

    return (
        <TextField
                   variant="outlined"
                   label={label}
                   name={name}
                   value={value}
                   onChange = {onChange}
                   required
                   type={type}
                   disabled={props.disabled}
                   readOnly={props.readOnly}             
                   />
    )
}
