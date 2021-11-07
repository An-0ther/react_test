import React, {useState, useMemo, useEffect} from 'react';
import PostService from '../API/PostService';
import { useFetching } from '../hooks/useFetching';
import { usePosts } from '../hooks/usePosts';
import { getPageCount, getPagesArray } from '../utils/pages';
import PostForm from '../components/PostForm';
import PostFilter from '../components/PostFilter';
import PostList from '../components/PostList';
import Mybutton from '../components/UI/button/Mybutton';

function Posts() {
    const [posts,
        setPosts] = useState([])
    const [filter, setFilter] = useState({sort: '', query: ''});
    const [totalPages, setTotalPages] = useState(0);
    const [limit, setLimit] = useState(10);
    const [page, setPage] = useState(1);
    const sortedAndSearchedPosts = usePosts(posts, filter.sort, filter.query);

    const [fetchPosts, isPostsLoading, postError] = useFetching( async (limit, page) => {
        const response = await PostService.getAll(limit, page);
        setPosts(response.data)
        const totalCount = response.headers['x-total-count']
        setTotalPages(getPageCount(totalCount, limit));
    })

    let pagesArray = getPagesArray(totalPages)
    console.log([pagesArray])

    const changePage = (page) => {
        setPage(page)
        fetchPosts(limit, page)
    }

    const createPost = (newPost) => {
        setPosts([...posts, newPost])
    }

    useEffect(() => {
        fetchPosts(limit, page)
    }, [])


    const removePost = (post) => {
        setPosts(posts.filter(p => p.id !== post.id))
    }

    
    return (
        <div className="App">
            <PostForm create={createPost} />
            <hr style={{margin: '15px 0'}} />
            <PostFilter filter={filter} setFilter={setFilter} />
            {postError &&
                <h1>Error happened ${postError}</h1>
            }
            {isPostsLoading
                ? <h1>Loaddiiing</h1>
                : <PostList remove={removePost} posts={sortedAndSearchedPosts} title="abrakadabra"/>
            }
            {pagesArray.map(n => 
                <Mybutton
                    onClick={() => changePage(n)}
                    key={n}
                >{n}</Mybutton>    
            )}
        </div>
    );
}

export default Posts;
