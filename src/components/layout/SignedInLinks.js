import React from 'react';
import { NavLink } from "react-router-dom"


const SignedInLinks = () => {
    return (
        <ul className="right">
            <li><NavLink to="/journal">Journal</NavLink></li>
            <li><NavLink to="/analyze_dreams">Analyze</NavLink></li>
            <li><NavLink to="/dreamlist">Dreamlist</NavLink></li>
            <li><NavLink to="/" >Ideas</NavLink></li>
            <li><NavLink to="/">Log Out</NavLink></li>
            <li><NavLink to="/" className="btn btn-floating pink lighten-1">Log Out</NavLink></li>
        </ul>
    );
};

export default SignedInLinks;