import React from 'react';
import axios from 'axios';
import './App.css';

class App extends React.Component {
  constructor() {
    super()
    this.state = {
      players: [],
      loading: true,
    }
  }

  componentDidMount() {
    axios.get('http://localhost:5000/api/players')
      .then(response => {
        console.log(response)
      })
      .catch(err => console.log(err))

  }

  render() {
    return(
      <div>
        <h1> World Cup App</h1>
      </div>
    )
  }
}

export default App;