import React from 'react'
import Typography from '@mui/material/Typography'
import { useTranslation } from 'react-i18next'

function Error() {
    const { t } = useTranslation()
    return (
        <div>
            <Typography variant="h1" color="initial">
                { t("error_content") }
            </Typography>
        </div>
    )
}

export default Error
