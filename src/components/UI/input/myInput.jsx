import { TextField } from '@mui/material';
import React from 'react';
import classes from './myInput.module.css';

const myInput = React.forwardRef((props, ref) => {
    return (
        <TextField sx={{ mt: 1, mb: 1 }} className={ classes.myInput } label="" variant="filled" ref = { ref } {...props}/>
    );
});

export default myInput;

