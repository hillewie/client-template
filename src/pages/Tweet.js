import React from 'react'

const Tweet = ({tweets, deleteTweet}) => {
    // let tweetDate = new Date(tweet.date);

    // const handleDeleteBtn = () => {
    //     deleteTweet(tweet['_id']);
    // }
    

    return (
        
        <div>
            
            {tweets.map((tweet, deleteTweet) => (
                <div key={tweet['_id']}
                    tweet={tweet}
                    deleteTweet={deleteTweet}
                    >
                    <ul>
                    {/* {`${tweetDate.getFullYear()}-${tweetDate.getMonth()}-${tweetDate.getDate()}`} */}

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


// const Tweet = (props) => {
//     // let tweetDate = new Date(tweet.date);

//     // const handleDeleteBtn = () => {
//     //     deleteTweet(tweet['_id']);
//     // }
    

//     return (
        
//         <div>
            
//             {props.tweets.map((tweet, deleteTweet) => (
//                 <div key={tweet['_id']}
//                     tweet={tweet}
//                     deleteTweet={deleteTweet}
//                     >
//                     <ul>
//                     {/* {`${tweetDate.getFullYear()}-${tweetDate.getMonth()}-${tweetDate.getDate()}`} */}

//                         <li>title: {tweet.title}</li>
//                         <li>author: {tweet.author}</li>
//                         <li>content: {tweet.content}</li> 
//                         <li>tags: {tweet.tags}</li> 
//                     </ul>
                    
//                 </div>
//             ))}
//         </div>
//     );      
// }

// export default Tweet;

