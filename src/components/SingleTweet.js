import React from 'react';
import { Link } from 'react-router-dom'




export default function SingleTweet({tweet}) {
    
    return (

        <div >
               
            
                <div >
                    <h4>Title: {tweet.title}</h4>
                    <p>Author: {tweet.author}</p>
                    <p>Content: {tweet.content}</p>
                    <p>Tags: {tweet.tags}</p>
                    
                    
                    <Link to='/tweets' >&larr; Back</Link>
                </div>
            
        </div>
    )
}



