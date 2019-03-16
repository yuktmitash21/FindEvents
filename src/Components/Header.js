import React from 'react'
import { Link } from 'react-router-dom'

//just a UI element with links between pages
function Header() {
    return (
        <header style={headerStyle}>
            <h1>Event Finder</h1>
            <Link style = {linkstyle} to="/">Select Events</Link>    |    <Link style = {linkstyle} to="/findevents"> Find Events</Link> |     <Link style = {linkstyle} to="/eventsnearyou">Find Events by Location</Link> |  <Link style = {linkstyle} to="/about">About</Link> 
        </header>
    )


}

const headerStyle = {
    background: '#333',
    color: '#fff',
    textAlign: 'center',
    padding: '10px'
}

const linkstyle = {
    color: "#fff",
    textDecoration:"none"
}


export default Header