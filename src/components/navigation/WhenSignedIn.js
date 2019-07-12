import React from 'react';
import { NavLink } from 'react-router-dom';

function WhenSignedIn (){
    return (
        <ul className="right">
            <li><NavLink to='/create'>New Mood Entry</NavLink></li>
            <li><NavLink to='/'>Log Out</NavLink></li>
            <li><NavLink to='/' className='btn btn-floating blue lighten-1'>LP</NavLink></li>
        </ul>
    )
}

export default WhenSignedIn