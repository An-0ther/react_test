import { Typography } from '@mui/material';
import {Helmet} from "react-helmet";
import React from 'react';
import '../styles/App.css';

function About() {
    return (
        <div>
            <Helmet>
                <meta charSet="utf-8" />
                <title>About page</title>
            </Helmet>
            <Typography variant="h1" color="initial">
                Just a page for router
            </Typography>
            <Typography variant="h1" color="initial">
                Just a page for router
            </Typography>
        </div>
                
    )
}

export default About
