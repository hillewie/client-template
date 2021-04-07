import React, {useState, useEffect } from 'react'
import CreateTweet from '../components/CreateTweet'
import Tweet from './Tweet'
import '../css/Tweets.css'


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
        <div className="main-container">
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
        </div>
)
}



export default TweetAPI
