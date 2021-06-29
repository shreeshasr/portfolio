import React, { Component } from 'react'
import Navbar from '../Navbar/Navbar'
import ProfileIntro from '../ProfileIntro/ProfileIntro'
import './Header.css'

class Header extends Component {
    render() {
        return (
            <div className="header-container">
                <Navbar/>
                <ProfileIntro/>
            </div>
        )
    }
}
export default Header;