import React, { Component, useState, useEffect } from 'react'
import CreateTweet from '../components/CreateTweet'
import Nav from '../components/Nav'
import Profilebar from '../components/Profilebar'
import Tweet from './Tweet'

const TweetAPI = () => {

    const [tweets, setTweets] = useState([]); 

    useEffect(() => {
        fetchTweet();
    }, [])

    const fetchTweet = async () => {
    const url = `http://localhost:5000/posts`;

    const response = await fetch(url);
    const data = await response.json();
     
    setTweets(data); 
    console.log(data); 

    
    
    
} 



return (
        <div>

            
                <div>
                    <CreateTweet
            
                     />
                </div>
               
            {/* Tweets */}

                <div>
                    <Tweet 
                        tweets={tweets}
                    /> 
                </div>
                

            <Profilebar/>
        </div>
)
}



export default TweetAPI
