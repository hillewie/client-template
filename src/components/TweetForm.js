import React from 'react'
import {Link} from "react-router-dom";

function TweetForm({handleSubmit, handleChange, tweet, tweetId }) {
    return (
        <form onSubmit={handleSubmit}>
            <input
                name="title"
                value={tweet.title}
                onChange={handleChange}
                placeholder="Ange fnitterrubrik.."

            />
            <input
                name="author"
                value={tweet.author}
                onChange={handleChange}
                placeholder="Ange ditt namn.."

            />
            <textarea 
                name="content" 
                value={tweet.content} 
                onChange={handleChange}
                cols="30" 
                rows="10"
            />
            <input
                name="tags"
                value={tweet.tags}
                onChange={handleChange}
                placeholder="Taggar.."

            />

            {
                tweetId === "update-page" 
                    ? <p>Created at: {tweet.date}</p>
                    : ''
            }
            
           
            <br />
            <br />
           
            <button> {tweetId === "update-page" ? "Update" : "Create" }</button>
                
            <br />
            <br />
            <Link to="/manage-tweets">&larr; Back</Link>
        </form>
    )
}

export default TweetForm
