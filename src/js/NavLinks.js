import React from "react";

import { hideMenu, /* showMenu */ } from "../js/toggleMenu.js";

const NavLinks = () => {
    return (
        <ul className="menu hide">
            <i className="fas fa-times" onMouseDown={ hideMenu }></i>
            <li><a className="nav-link" href="#main-container" onMouseDown={ hideMenu }>Home</a></li>
            <li><a className="nav-link" href="#" onMouseDown={ hideMenu }>About</a></li>
            <li><a className="nav-link" href="#" onMouseDown={ hideMenu }>Contact</a></li>
        </ul>
    );
}

export default NavLinks;