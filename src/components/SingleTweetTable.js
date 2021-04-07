import React from 'react'
import '../css/TweetTable.css'

const SingleTweetTable = ({tweet, deleteTweet}) => {
    
    const handleDeleteBtn = () => {
        deleteTweet(tweet['_id']); 
    }

    console.log(handleDeleteBtn);

    return (
        
        <div className="tweetTable">
            <table >
                <tr>
                    <th>Titel</th>    
                    <th>Användare</th>    
                    <th>Fnitter</th>    
                    <th>Taggar</th>            
                </tr>

                <tr>
                    <td>{tweet.title}</td>
                    <td>{tweet.author}</td>
                    <td className="tableContent">{tweet.content}</td>
                    <td>{tweet.tags}</td>
                </tr>
                <button onClick={handleDeleteBtn}>Delete</button>
            </table>
                    
                    
                </div>
           
    
    );      
}

export default SingleTweetTable;