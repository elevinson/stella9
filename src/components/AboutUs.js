import React from 'react';
import Nav from './Nav';
import Header from './Header';
import BandMember from './BandMember';
import bandmembers from '../bandmembers';

class AboutUs extends React.Component {
    state = {
        bandMembers: { ...bandmembers },
    }
    render() {
        return (
            <div>
                <Nav />
                <Header />
                <div className="about-us">
                    <h1>Meet the Band!</h1>                       
                    {Object.keys(this.state.bandMembers).map(key => <BandMember key={key} index={key} details={this.state.bandMembers[key]} />)}

                </div>
            </div>
        )
    }
}

export default AboutUs;