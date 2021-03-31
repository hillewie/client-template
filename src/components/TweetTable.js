import React from 'react'

const TweetTable = (props) => {



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
            {props.tweets.map((tweet) => (
                <div>
                    <table>
                        <tr>
                            <td>{tweet.title}</td>
                            <td>{tweet.author}</td>
                            <td>{tweet.content}</td>
                            <td>{tweet.tags}</td>
                        </tr>
                    </table>
                    
                </div>
            ))}
        </div>
    );      
}

export default TweetTable;