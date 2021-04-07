import React from 'react'
import styled from 'styled-components';
import { Link } from "react-router-dom"
import "../css/Nav.css"
import HomeIcon from "@material-ui/icons/Home";
import PeopleAltIcon from '@material-ui/icons/PeopleAlt';
import CreateIcon from '@material-ui/icons/Create';
import SettingsIcon from '@material-ui/icons/Settings';
import EmailIcon from '@material-ui/icons/Email';
import FavoriteIcon from '@material-ui/icons/Favorite';
import NoMeetingRoomIcon from '@material-ui/icons/NoMeetingRoom';

function Nav()  {
    
        return (
            <div className="navbar" >
               
                        <Link to="/tweets" className="text-links" style={{ textDecoration: 'none' }}>{<HomeIcon className="icon-links" />} Hem</Link>
                        <Link to="/manage-tweets" className="text-links" style={{ textDecoration: 'none' }}>{<PeopleAltIcon className="icon-links"/>} Admin</Link> 
                        <Link to="/create-item"  className="text-links" style={{ textDecoration: 'none' }}>{<CreateIcon className="icon-links"/>} Fnittra</Link> 
                        <Link to="/create-item" className="text-links" style={{ textDecoration: 'none' }}>{<SettingsIcon className="icon-links"/>} Inställningar</Link> 
                        <Link to="/create-item" className="text-links" style={{ textDecoration: 'none' }}>{<EmailIcon className="icon-links"/>} Meddelanden</Link> 
                        <Link to="/create-item" className="text-links" style={{ textDecoration: 'none' }}>{<FavoriteIcon className="icon-links"/>} Favoriter</Link> 
                        <Link to="/create-item" className="text-links" style={{ textDecoration: 'none' }}>{<NoMeetingRoomIcon className="icon-links"/>} Logga ut</Link>  
               
            </div>
        )
}
// const Links = styled.ul`
// top: 0;
// color: blue;
// font-size: 20px;
// text-transform: uppercase;
// padding: 20px;
// letter-spacing: 5px;
// `;



export default Nav
