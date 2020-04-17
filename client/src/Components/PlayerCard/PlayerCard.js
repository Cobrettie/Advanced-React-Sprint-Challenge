import React from 'react'

export default function PlayerCard(props) {
  console.log(props.players)
  return(
    <div>
      <h2>Player Card Component</h2>
      <div>
        {props.players.map(player => {
          console.log(player)
          return (
            <div>{player.name}</div>          
          )          
        })}
      </div>
    </div>
  )
}