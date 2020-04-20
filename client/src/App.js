import React from 'react';
import axios from 'axios';
import PlayerCard from './Components/PlayerCard/PlayerCard';
import NavMenu from './Components/NavMenu/NavMenu';
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
        this.setState({players: response.data})
        this.setState({loading: false})
      })
      .catch(err => console.log(err))
  }

  render() {
    return(
      <div>
        <NavMenu />
        <h1>Womens World Cup Players, Ranked by Google Searches</h1>
        {this.state.loading === false ? <PlayerCard players={this.state.players} /> : null }
      </div>
    )
  }
}

export default App;