import { Typography } from '@mui/material'
import React from 'react'
import { useTranslation } from 'react-i18next'
import PostItem from './PostItem'

export default function PostList({posts, title, remove}) {
    const { t } = useTranslation()
    
    if(!posts.length) {
        return (
            <Typography variant="h5"  sx={{textAlign: 'center', fontWeight: 'bold'}}>
                { t("no_posts") }
            </Typography>
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
