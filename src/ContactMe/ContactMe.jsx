import React from 'react'
import PhoneIcon from '@material-ui/icons/Phone';
import MailOutlineIcon from '@material-ui/icons/MailOutline';
import LocationOnIcon from '@material-ui/icons/LocationOn';
import './ContactMe.css'
function ContactMe() {
    return (
        <div className="contact-me">
            <p>CONTACT ME</p>
            <div className="reach-through">
                <div className="medium">
                    <PhoneIcon/>
                    <h3>PHONE</h3>
                    <p>+91 9632512087</p>
                </div>
                <div className="medium">
                    <MailOutlineIcon/>
                    <h3>EMAIL</h3>
                    <p>shreesha.sr92@gmail.com</p>
                </div>
                <div className="medium">
                    <LocationOnIcon/>
                    <h3>LOCATION</h3>
                    <p>Bangalore</p>
                </div>
                
            </div>
        </div>
    )
}

export default ContactMe
