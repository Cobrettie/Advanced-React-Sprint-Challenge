import React from 'react'

export default function PlayerCard(props) {
  console.log(props.players)
  return(
    <div>
      <h2>Player Card Component</h2>
      <div>
        {props.players.map(player => {
          return (
            <div key={player.id} >
              <p>Name: {player.name}</p>
              <p>Country: {player.country}</p>
            </div> 
          )          
        })}
      </div>
    </div>
  )
}