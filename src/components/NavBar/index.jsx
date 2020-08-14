import React from 'react';
import { FiHome, FiVideo, FiTv } from 'react-icons/fi';
import { Link } from 'react-router-dom';

const NavBar = () => {
    return (
        <div className="navBar">
            <Link to="/"><FiHome className="icon-NavBar" /></Link>
            <Link to="/movie"><FiVideo className="icon-NavBar" /></Link>
            <Link to="/tv"><FiTv className="icon-NavBar" /></Link>
        </div>
    )
}

export default NavBar
