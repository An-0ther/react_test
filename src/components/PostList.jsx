import { Typography } from '@mui/material'
import React from 'react'
import PostItem from './PostItem'

export default function PostList({posts, title, remove}) {
    if(!posts.length) {
        return (
            <h1 style={{textAlign: 'center'}}>
                No posts
            </h1>
        )
    }

    return (
        <div>
            <Typography variant="h5"  sx={{textAlign: 'center', fontWeight: 'bold'}}>
                {title}
            </Typography>
            {posts.map((post, index) =>
                <PostItem remove = {remove} number = {index + 1} post={post} key={post.id}/>
            )}
        </div>
    )
}
