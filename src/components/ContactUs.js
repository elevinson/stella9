import React from 'react';
import Header from './Header';
import Nav from './Nav';

class ContactUs extends React.Component {
    render() {
        return (
            <div>
                <Nav />
                <Header />
                <div className="contact-us">
                    <h1>Book a gig!</h1>
                    <div className="methods">
                        <h3>Follow us on FaceBook: </h3>
                        <h3>Fucking gmail won't let me make a new account</h3>
                    </div>
                </div>
            </div>
        )
    }

}

export default ContactUs;