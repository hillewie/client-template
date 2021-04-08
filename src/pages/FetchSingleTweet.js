import React, {useState, useEffect} from 'react';
import SingleTweet from "../components/SingleTweet"




function FetchSingleTweets({match}) {
    
        // console.log(match);
        // console.log('tweetId:', match.params.id);
        const [tweet, setTweet] = useState({});
        
    
        useEffect(() => {
            async function FetchSingleTweet(){
                const response = await fetch('http://localhost:5000/posts/' + match.params.id);
                if(!response.ok){
                    throw new Error ('HTTP Error ! status' + response.status);
                }
                
                const data = await response.json();
                console.log(data);
                console.log("hej");
                setTweet(data);
            }
            FetchSingleTweet()
        }, []);

        

        return (
            <div>
                
                <div> 
                    <SingleTweet 
                        tweet={tweet}
                        
                        />
                    </div>
            </div>
        )
    }

export default FetchSingleTweets;