import React from 'react'
import { CardContainerDiv, PlayerCardDiv } from './PlayerCardStyles'

export default function PlayerCard(props) {
  console.log(props.players)
  return(
    <div>
      <h2>Player Card Component</h2>
      <CardContainerDiv>
        {props.players.map(player => {
          return (
            <PlayerCardDiv key={player.id} >
              <p>Name: {player.name}</p>
              <p>Country: {player.country}</p>
              <p>Google Searches from June-July 2019, worldwide: {player.searches}</p>
            </PlayerCardDiv> 
          )          
        })}
      </CardContainerDiv>
    </div>
  )
}