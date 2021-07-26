import React from 'react';
import './Navbar.css';

function Navbar(){
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
                    <a href="https://www.instagram.com/shreesha_sr/" target="_blank" rel="noreferrer"><i class="fa fa-instagram" aria-hidden="true"/></a>
                    <a href="https://www.facebook.com/shreesha.sr.5/" target="_blank" rel="noreferrer"><i class="fa fa-facebook" aria-hidden="true"/></a>
                    <a href="https://twitter.com/tweet_shreesha" target="_blank" rel="noreferrer"><i class="fa fa-twitter" aria-hidden="true"/></a>
                    <a href="https://www.linkedin.com/in/shreesha-sr-822322100/" target="_blank" rel="noreferrer"><i class="fa fa-linkedin" aria-hidden="true"/></a>
                    <a href="https://github.com/shreeshasr" target="_blank" rel="noreferrer"><i class="fa fa-github" aria-hidden="true"/></a>
                </div>
            </div>
        )
}
export default  Navbar;