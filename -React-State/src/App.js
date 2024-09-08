import React, { Component } from 'react';
import './App.css';
import me from "./419893bc-1ccc-4166-b8d4-f9c2f944df96.jpeg"
class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      person: {
        fullName: 'Naouar Rihab',
        bio: 'A full stack developper',
        imgSrc: me , 
        profession: 'Software developpement'
      },
      shows: false,
      interval: 0 
    };

    this.intervalId = null; 
  }

  componentDidMount() {
    this.intervalId = setInterval(() => {
      this.setState(prevState => ({
        interval: Math.floor((Date.now() - this.mountTime) / 1000)
      }));
    }, 1000);
    
    this.mountTime = Date.now();
  }

  componentWillUnmount() {
    clearInterval(this.intervalId);
  }

  toggleShows = () => {
    this.setState(prevState => ({
      shows: !prevState.shows
    }));
  }

  render() {
    const { person, shows, interval } = this.state;

    return (
      <div className="App">
        <header className="App-header">
          <h1>My informations</h1>
          <button onClick={this.toggleShows}>
            {shows ? 'Hide' : 'Show'} Details
          </button>
          {shows && (
            <div>
              <img src={person.imgSrc} alt={person.fullName} />
              <h2>{person.fullName}</h2>
              <p>{person.bio}</p>
              <p><strong>Profession:</strong> {person.profession}</p>
            </div>
          )}
          <p>Time since component mounted: {interval} seconds</p>
        </header>
      </div>
    );
  }
}

export default App;
