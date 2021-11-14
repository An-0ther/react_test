import { Typography } from '@mui/material';
import {Helmet} from "react-helmet";
import React from 'react';
import '../styles/App.css';
import { useTranslation } from 'react-i18next';

function About() {
    const { t } = useTranslation()

    return (
        <div>
            <Helmet>
                <meta charSet="utf-8" />
                <title>{ t("about") }</title>
            </Helmet>
            <Typography variant="h1" color="initial">
                { t("about_content") }
            </Typography>
            <Typography variant="h1" color="initial">
                { t("about_content") }
            </Typography>
        </div>
                
    )
}

export default About
