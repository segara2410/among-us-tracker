import React from 'react';
import Player from './Player';
import styled from 'styled-components';
import {Droppable, Draggable} from 'react-beautiful-dnd';

const CardContainer = styled.div`
  width: 300px;
  margin: 0px 25px;
  background: ${props => props.color};
  border: ${props => (props.isDraggingOver ? '4px dashed #FFF' : '4px dashed rgba(0,0,0,0)')};
  border-radius: 40px;
  padding: 15px;
  box-shadow: 25px 25px 50px rgba(0, 0, 0, 0.15);
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

function Card({card, players, index}) {
  return (
    <Draggable draggableId={card.id} index={index}>
      {(provided) => (  
        <Droppable droppableId={card.id} type="player">
          {(provided2, snapshot) => (
          <CardContainer ref={provided.innerRef} color={card.color} {...provided.dragHandleProps} isDraggingOver={snapshot.isDraggingOver} {...provided.draggableProps}>
            <CardTitle>
              {card.title}
            </CardTitle>
            <PlayerContainer ref={provided2.innerRef} {...provided2.droppableProps}>
              {players.map((player, index) => <Player key={player.id} player={player} index={index} /> )}
              {provided2.placeholder}
            </PlayerContainer>
          </CardContainer>
          )}
        </Droppable>
      )}
    </Draggable>
  );
}

export default Card;