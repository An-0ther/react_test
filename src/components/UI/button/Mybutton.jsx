import React from 'react'
import classes from "./Mybutton.module.css";

export default function Mybutton({children, ...props}) {
    return (
        <button {...props} className={classes.myBtn}>
            {children}
        </button>
    )
}
