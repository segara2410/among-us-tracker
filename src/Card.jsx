import React, { useState, useEffect } from 'react';
import Player from './Player';
import styled from 'styled-components';
import {Droppable} from 'react-beautiful-dnd';

const CardContainer = styled.div`
  width: ${props => (props.isWide ? '20vw' : '180px;')};
  margin: 25px 25px;
  background: ${props => props.color};
  border: ${props => (props.isDraggingOver ? '4px dashed #FFF' : '4px dashed rgba(0,0,0,0)')};
  border-radius: 40px;
  padding: 15px;
  box-shadow: 25px 25px 50px rgba(0, 0, 0, 0.15);
  display: inline-block;
  vertical-align:top
`

const CardTitle = styled.h3`
  color: #FFFFFF;
  text-align: center;
  margin-bottom: 25px;
  font-family: sans-serif;
  font-size: 25px;
  font-weight: bold;
`

const PlayerContainer = styled.div`
  min-height: 100px;
  width: 100%;
`

function Card({card, players}) {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  useEffect(() => {
    window.addEventListener("resize", () => {
      setWindowWidth(window.innerWidth);
    });
  }, []);

  return (
    <Droppable droppableId={card.id} type="player">
      {(provided, snapshot) => (
      <CardContainer color={card.color} isDraggingOver={snapshot.isDraggingOver} isWide={windowWidth > 1366 ? true : false}>
        <CardTitle>
          {card.title}
        </CardTitle>
        <PlayerContainer ref={provided.innerRef} {...provided.droppableProps}>
          {players.map((player, index) => <Player key={player.id} player={player} index={index} /> )}
          {provided.placeholder}
        </PlayerContainer>
      </CardContainer>
      )}
    </Droppable>
  );
}

export default Card;