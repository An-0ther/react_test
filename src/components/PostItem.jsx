import React from 'react'
import Mybutton from "./UI/button/Mybutton";
import { Typography } from '@mui/material'
import DeleteIcon from '@mui/icons-material/Delete';
import { useTranslation } from 'react-i18next';

export default function PostItem(props) {
    const { t } = useTranslation()
    return (
        <div className="post">
            <Typography className="post_content">
                <strong>{props.post.id}. {props.post.title}</strong>
                <p className="descr">{props.post.body}</p>
                <Mybutton onClick = {() => props.remove(props.post)}>
                    <DeleteIcon sx={{fontSize: 16}}/>
                    { t("delete_post") }
                </Mybutton>
            </Typography>
        </div>
    )
}
