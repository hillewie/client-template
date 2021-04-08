import React, {useState, useEffect} from 'react'
import "../../css/Manage.css";
import TweetTable from '../../components/TweetTable';


function ManageTweets({match}) {

    
    console.log('tweetId:', match.params.id);
    const [tweets, setTweets] = useState([]);

     useEffect(() => {
        fetchTweets();
    }, [])
    
    const fetchTweets = async () => {
        const url = `http://localhost:5000/posts/`;
    
        const response = await fetch(url);
        const data = await response.json();
         
        setTweets(data); 
        console.log(data); 
}



const deleteTweet = async (tweetId) => {
    try {
        await fetch('http://localhost:5000/posts/' + tweetId, {
            method: 'DELETE', // GET, POST, PATCH, DELETE
        });
    } catch (message) {
        throw new Error(message);
    }

    fetchTweets();
}


    return (
        <div className="manage">
            

            <div>
                <TweetTable 
                    tweets={tweets}
                    deleteTweet={deleteTweet}
                /> 
            </div>

          
        </div>
    )
}

export default ManageTweets