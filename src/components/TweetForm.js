import React from 'react'
import styled from 'styled-components';
import {Link} from "react-router-dom";
import '../css/TweetForm.css'

function TweetForm({handleSubmit, handleChange, tweet, tweetId }) {
    return (
        <form onSubmit={handleSubmit} className="tweetBox">
            <input className="tweetBox_input"
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


            <button> {tweetId === "update-page" ? "Update" : "Create" }</button>
                
            <br />            
        </form>
    )
}

// const form = styled.form`
//     box-sizing: border-box;
//     border: 1px solid #ddd;
//     text-align: left;
// `;

// const Input = styled.input`
//   width: 98%;
//   padding: 5px;
// `;

export default TweetForm
