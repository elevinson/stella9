import React from 'react';
import logo from './logo.svg';
import Header from './components/Header';
import Nav from './components/Nav';
import Intro from './components/Intro';
import Gig from './components/Gig';
import gigs from './sample-gigs';
import './App.css';

class App extends React.Component {
  state = {
    gigs: { ...gigs },
  }

  render () {
    return (
      <div className="App">
        <Nav />
        <Header />
        <Intro />
        <div className="gigs">
          <h1>See Us Live!</h1>
          {Object.keys(this.state.gigs).length ? 
            Object.keys(this.state.gigs).map(key => <Gig key={key} index={key} details={this.state.gigs[key]} />) :
            <h2>New Gigs Coming Soon!</h2>
          }
        </div>
      </div>
    )
  }
}

export default App;
