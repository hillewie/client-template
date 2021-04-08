import React, { useState } from 'react'
import TweetForm from '../../components/TweetForm'
import styled from 'styled-components';
import {Link} from "react-router-dom";


function CreateItem() {
    const [tweet, setTweet] = useState({});
    // const history = useHistory(); // Initate
    // console.log(history);

    
 
    const handleChange = (e) => {
        const name = e.target.name;
        const value = e.target.value;

        setTweet({
            ...tweet,
            [name]: value
        })
    }

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            await fetch('http://localhost:5000/posts/', {
                method: 'POST', // GET, POST, PATCH, DELETE
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(tweet) // body data type must match "Content-Type" header
            });
    
            window.location.replace('/manage-tweets') // redirects to the index.html page
            // A smoother redirecting, without a page reload
            // history.push('/manage-tweets')
        } catch (error) {
            console.log(error);
        }

    }
        return (
            <div>
                {/* <Title>Fnittra</Title> */}
                
               <TweetForm
                               handleSubmit={handleSubmit}
                               handleChange={handleChange}
                               tweet={tweet}
                               tweetId="create-page"
               />
                <Link to="/manage-tweets">&larr; Tillbaka</Link>
            </div>
            
        )
        
}

export default CreateItem
