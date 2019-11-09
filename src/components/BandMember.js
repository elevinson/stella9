import React from 'react';

class BandMember extends React.Component {
    
    render() {
        const bandMember = this.props.details;
        return (           
            <div className="band-member">
                <img src={bandMember.image} alt={bandMember.name} />
                <div className="text">
                    <h3>{bandMember.name}</h3>
                    <p>{bandMember.desc}</p> 
                </div>
            </div>
        )
    }
}

export default BandMember;