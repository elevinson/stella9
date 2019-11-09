import React from 'react';
import { Link } from 'react-router-dom';
import ResponsiveMenu from 'react-responsive-navbar';
import { FaListUl, FaTimes } from 'react-icons/fa';

class Nav extends React.Component {
    render() {
        return (
            <nav>
                <ResponsiveMenu
                    menuOpenButton={<FaListUl />}
                    menuCloseButton={<FaTimes />}
                    changeMenuOn="500px"
                    largeMenuClassName="large-menu"
                    smallMenuClassName="small-menu"
                    menu= {
                            <ul>
                                <li><Link to="/">Home</Link></li>
                                <li><Link to="/about-us">Meet the Band!</Link></li>
                                <li><Link to="/contact-us">Book a Gig!</Link></li>
                                <li><Link to="/gallery">Gallery</Link></li>      
                            </ul>
                    }
                />    
            </nav>
        )
    }
}

export default Nav;