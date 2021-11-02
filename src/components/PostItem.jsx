import React from 'react'
import Mybutton from "./UI/button/Mybutton";

export default function PostItem(props) {
    return (
        <div className="post">
            <div className="post_content">
                <strong>{props.number}. {props.post.title}</strong>
                <p className="descr">{props.post.body}</p>
                <Mybutton onClick = {() => props.remove(props.post)}>Delete</Mybutton>
            </div>
        </div>
    )
}
