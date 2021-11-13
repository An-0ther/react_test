import React from 'react'
import Mybutton from "./UI/button/Mybutton";
import { Typography } from '@mui/material'
import DeleteIcon from '@mui/icons-material/Delete';

export default function PostItem(props) {
    return (
        <div className="post">
            <Typography className="post_content">
                <strong>{props.post.id}. {props.post.title}</strong>
                <p className="descr">{props.post.body}</p>
                <Mybutton onClick = {() => props.remove(props.post)}>
                    <DeleteIcon sx={{fontSize: 16}}/>Delete
                </Mybutton>
            </Typography>
        </div>
    )
}
