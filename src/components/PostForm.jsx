import React, {useState} from 'react'
import Mybutton from "./UI/button/Mybutton";
import MyInput from "./UI/input/myInput";

function PostForm({create}) {
    const [post, setPost] = useState({title: '', body: ''})

    const addNewPost = (e) => {
        e.preventDefault()
        const newPost = {
            ...post, id: Date.now()
        }
        create(newPost)
        setPost({title: '', body: ''})
    }

    return (
        <form>
            <MyInput
                onChange = {e => setPost({...post, title: e.target.value})}
                value = {post.title}
                type = "text" 
                placeholder="Name of post"/>
            <MyInput
                onChange = {e => setPost({...post, body: e.target.value})}
                value = {post.body}
                type="text"
                placeholder="Name of post"/>
            <Mybutton onClick={addNewPost} >Create post</Mybutton>
        </form>
    )
}

export default PostForm
