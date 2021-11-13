import { Button } from '@mui/material';
import React from 'react'
import classes from "./Mybutton.module.css";

export default function Mybutton({children, ...props}) {
    return (
        <Button {...props} variant="contained">
            {children}
        </Button>
    )
}
