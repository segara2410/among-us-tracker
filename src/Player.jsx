import React, { useState } from 'react';
import styled from 'styled-components';
import {Draggable} from 'react-beautiful-dnd';

const PlayerList = styled.div`
  width: 100%;
  background: ${props => props.isActive ? '#FFF' : '#000'};
  border-radius: 10px;
  margin-bottom: 15px;
  box-shadow: ${props => props.isDragging ? '0px 10px 20px rgba(0, 0, 0, 0.25)' : '0px 4px 4px rgba(0, 0, 0, 0.25)'};
  cursor: pointer;
`

const PlayerListText = styled.h6`
  color: #7B7B7B;
  text-align: center;
  font-family: sans-serif;
  font-size: 20px;
  margin: 0px;
  padding: 15px;
  text-transform: none;
`

const PlayerImage = styled.img`
  height: 50px;
`

function Player({player, index}) {
  const [active, setActive] = useState(true);

  return (
    <Draggable draggableId={player.id} index={index}>
      {(provided, snapshot) => (
        <PlayerList ref={provided.innerRef} onClick={() => setActive(active ? false : true)} isActive={active} isDragging={snapshot.isDragging} {...provided.draggableProps} {...provided.dragHandleProps}>
          <PlayerListText>{player.content}</PlayerListText>
        </PlayerList>
      )}
    </Draggable>
  );
}

export default Player;