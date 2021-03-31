import React from 'react'

const Tweet = (props) => {

    

    return (
        
        <div>
            
            {props.tweets.map((tweet) => (
                <div>
                    <ul>
                        
                        <li>title: {tweet.title}</li>
                        <li>author: {tweet.author}</li>
                        <li>content: {tweet.content}</li> 
                        <li>tags: {tweet.tags}</li> 
                    </ul>
                </div>
            ))}
        </div>
    );      
}

export default Tweet;
