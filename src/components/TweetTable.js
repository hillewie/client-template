import React from 'react'
import SingleTweetTable from './SingleTweetTable'



const TweetTable = ({tweets, deleteTweet}) => {
    
   

    return (
        
        <div>
            
            
            {tweets.map((tweet) => (
                <SingleTweetTable
                key={tweet['_id']}
                tweet={tweet}
                deleteTweet={deleteTweet}
                    
                    
                />
            ))}
        </div>
    );      
}


export default TweetTable;


// const TweetTable = ({tweets, deleteTweet}) => {
    
//     const handleDeleteBtn = () => {
//         deleteTweet(tweet['_id']); 
//     }

//     return (
        
//         <div>
            
//             <table>
//                          <tr>
//                         <th>Titel</th>    
//                         <th>Användare</th>    
//                         <th>Fnitter</th>    
//                         <th>Taggar</th>    
                        
//                         </tr>
//             </table>
//             {tweets.map((tweet) => (
//                 <SingleTweetTable key={tweet['_id']}
//                 tweet={tweet}
//                 deleteTweet={deleteTweet}>
//                     <table>
//                         <tr>
//                             <td>{tweet.title}</td>
//                             <td>{tweet.author}</td>
//                             <td>{tweet.content}</td>
//                             <td>{tweet.tags}</td>
//                         </tr>
//                     </table>
//                     <button onClick={handleDeleteBtn}>Delete</button>
                    
//                 </SingleTweetTable>
//             ))}
//         </div>
//     );      
// }


// export default TweetTable;


