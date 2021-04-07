import React from 'react'
import styled from 'styled-components';
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
                    <Button onClick={handleDeleteBtn}>Delete</Button>
                    
                </div>
           
    
    );      
}
const Button = styled.button`
  background: palevioletred;
  color: white;
  font-size: 1em;
  margin: 1em;
  padding: 0.25em 1em;
  border: 2px solid palevioletred;
  border-radius: 3px;
`;


export default SingleTweetTable;