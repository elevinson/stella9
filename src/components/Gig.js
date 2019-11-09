import React from 'react';

class Gig extends React.Component {
    
    render() {
        const gig = this.props.details;
        return (           
            <div className="gig">
                <img src={gig.image} alt={gig.name} />
                <h3>{gig.name}</h3>
                <p>{gig.desc}</p> 
            </div>
        )
    }
}

export default Gig;