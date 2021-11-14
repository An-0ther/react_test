import React, {useState} from 'react'
import { useTranslation } from 'react-i18next';
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

    const { t } = useTranslation()

    return (
        <form>
            <MyInput
                onChange = {e => setPost({...post, title: e.target.value})}
                value = {post.title}
                type = "text" 
                placeholder={ t("name_of_post") }/>
            <MyInput
                onChange = {e => setPost({...post, body: e.target.value})}
                value = {post.body}
                type="text"
                placeholder={ t("descr_of_post") }/>
            <Mybutton onClick={addNewPost} >{ t("create_post") }</Mybutton>
        </form>
    )
}

export default PostForm
