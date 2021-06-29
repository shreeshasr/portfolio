import React, { Component } from 'react';
import './Navbar.css';

class Navbar extends Component {
    render() {
        return (
            <div className="navbar-container">
                <p>iamShreesha</p>
                <nav>
                    <ul class="nav-links">
                        <li>HOME</li>
                        <li>SERVICES</li>
                        <li>RESUME</li>
                        <li>PROJECTS</li>
                        <li>BLOG</li>
                        <li>CONTACT</li>
                    </ul>
                </nav>
                <div className="social-media-icons">
                    <i class="fa fa-instagram" aria-hidden="true"></i>
                    <i class="fa fa-facebook" aria-hidden="true"></i>
                    <i class="fa fa-twitter" aria-hidden="true"></i>
                    <i class="fa fa-linkedin" aria-hidden="true"></i>
                </div>
            </div>
        )
    }
}
export default  Navbar;