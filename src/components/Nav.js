import React from 'react'
import { Link } from "react-router-dom"

function Nav()  {
    
        return (
            <div>
                <nav>
                    <ul>
                        <Link to="/tweets">Home</Link>
                        <Link to="/manage-tweets">Admin</Link> 
                    </ul>
                </nav>
            </div>
        )
    
}

export default Nav
