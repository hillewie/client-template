import React from 'react'
import {Link} from "react-router-dom";

function TweetForm({handleSubmit, handleChange, tweet }) {
    return (
        <form onSubmit={handleSubmit}>
            <textarea 
                name="content" 
                value={tweet.content} 
                onChange={handleChange}
                cols="30" 
                rows="10"
            />
           
            <br />
            <br />
            
            <button> {"Create"}</button>
            <br />
            <br />
            <Link to="/manage-tweets">&larr; Back</Link>
        </form>
    )
}

export default TweetForm
