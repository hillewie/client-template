import React from 'react'
import styled from 'styled-components';
import { Link } from "react-router-dom"

function Nav()  {
    
        return (
            <div>
                <nav>
                    <Links>
                        <Link to="/tweets">Home</Link>
                        <Link to="/manage-tweets">Admin</Link> 
                        <Link to="/create-item">Fnittra</Link> 
                    </Links>
                </nav>
            </div>
        )
}
const Links = styled.ul`
top: 0;
color: blue;
font-size: 20px;
text-transform: uppercase;
padding: 20px;
letter-spacing: 5px;
`;



export default Nav
