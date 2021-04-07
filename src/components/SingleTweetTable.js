import React from 'react'

const SingleTweetTable = ({tweet, deleteTweet}) => {
    
    const handleDeleteBtn = () => {
        deleteTweet(tweet['_id']); 
    }

    console.log(handleDeleteBtn);

    return (
        
        <div>
            
            <table>
                         <tr>
                        <th>Titel</th>    
                        <th>Användare</th>    
                        <th>Fnitter</th>    
                        <th>Taggar</th>    
                        
                        </tr>
            </table>
            
                    <table>
                        <tr>
                            <td>{tweet.title}</td>
                            <td>{tweet.author}</td>
                            <td>{tweet.content}</td>
                            <td>{tweet.tags}</td>
                        </tr>
                    </table>
                    <button onClick={handleDeleteBtn}>Delete</button>
                    
                </div>
           
    
    );      
}


export default SingleTweetTable;