import React, { useState } from 'react';
import styled from 'styled-components';
import {Draggable} from 'react-beautiful-dnd';

const PlayerList = styled.div`
  width: 100%;
  background: ${props => props.isActive ? '#FFF' : '#000'};
  margin-left: -8px;
  border: 8px solid;
  border-color: ${props => props.color};
  border-radius: 10px;
  margin-bottom: 15px;
  box-shadow: ${props => props.isDragging ? '0px 10px 20px rgba(0, 0, 0, 0.25)' : '0px 4px 4px rgba(0, 0, 0, 0.25)'};
  cursor: pointer;
`

const PlayerListText = styled.h1`
  color: #7B7B7B;
  text-align: center;
  font-family: sans-serif;
  font-size: 20px;
  margin: 0px;
  padding-top: 3px;
  padding-bottom: 25px;
  text-transform: none;
`

const PlayerImage = styled.img`
  position: relative;
  top: 13px;
  height: 40px;
`

function Player({player, index}) {
  const [active, setActive] = useState(true);

  return (
    <Draggable draggableId={player.id} index={index}>
      {(provided, snapshot) => (
        <PlayerList ref={provided.innerRef} color={player.color} onClick={() => setActive(active ? false : true)} isActive={active} isDragging={snapshot.isDragging} {...provided.draggableProps} {...provided.dragHandleProps}>
          <PlayerListText><PlayerImage src={`${process.env.PUBLIC_URL}/characters/${player.content}.png`} /> {player.content}</PlayerListText>
        </PlayerList>
      )}
    </Draggable>
  );
}

export default Player;