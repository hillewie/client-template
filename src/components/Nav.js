import React, { Component } from 'react'
import { Link } from "react-router-dom"

export class Nav extends Component {
    render() {
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
}

export default Nav
