import axios from 'axios';
import React from 'react'
import { useState , useEffect } from 'react'


export const Newsone = () => {
    const [ posts, setPosts ] = useState([]);

    useEffect(() =>{
            axios.get('https://jsonplaceholder.typicode.com/posts')
        .then(response => {
            setPosts(response.data);
        })
        .catch(error => {
            console.error(error);
        });
    }, []);

    return (
        <>
                <div>
                    <h2> api</h2>
                    <ul>
                    {posts.map(post => (
                        <li key={post.id}> {post.title} </li>
                    ))}
                    </ul>
                </div>
            </>
    )
}
