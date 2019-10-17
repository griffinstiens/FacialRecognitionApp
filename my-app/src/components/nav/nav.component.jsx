import React from 'react';


const Nav = () => {
    return (
        <nav>
            <div className="nav-wrapper deep-purple">
                <a href="#!" className="brand-logo center">Face Finder</a>
                <ul id="nav-mobile" className="right hide-on-med-and-down">
                    <li><a href="#!">HOME</a></li>
                    <li><a href="#!">ABOUT</a></li>
                    <li><a href="#!">SIGN IN</a></li>
                </ul>
            </div>
        </nav>
    );
}

export default Nav;