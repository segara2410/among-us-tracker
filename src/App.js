import React, { useState, useEffect } from 'react';
import Card from './Card';
import styled from 'styled-components';
import {initialData} from './initialData.js';
import {DragDropContext, Droppable} from 'react-beautiful-dnd';
import { AiOutlineReload } from "react-icons/ai";

const Title = styled.h1`
  color: #7B7B7B;
  font-family: sans-serif;
  font-size: 30px;
  text-align: center;
  padding-top: 25px;
`

const ResetIcon = {
  cursor: 'pointer',
  border: 'none',
  height: '20px',
  width: '20px',
}

const CardContainer = styled.div`
  width: 100%;
  justify-content: center;
  ${props => (props.isWide ? 'display: flex; align-items: flex-start;' : '')}
`

const App = () => {
  const [state, setState] = useState(initialData);
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  useEffect(() => {
    window.addEventListener("resize", () => {
      setWindowWidth(window.innerWidth);
    });
  }, []);

  const handleReset = () => {
    setState(initialData);
  };

  const onDragEnd = (result) => {
    const {draggableId, source, destination, type} = result;
    if ((!destination) || (source.droppableId === destination.droppableId && source.index === destination.index)) {
      return;
    }

    if (type === "card") {
      const newCardOrder = Array.from(state.cardOrder);
      newCardOrder.splice(source.index, 1);
      newCardOrder.splice(destination.index, 0, draggableId);
      
      const newState = {
        ...state,
        cardOrder: newCardOrder
      }
      setState(newState);
      return;
    }

    if (type === "player") {
      const start = state.cards[source.droppableId];
      const finish = state.cards[destination.droppableId];
  
      if (start === finish) {
        const card = state.cards[source.droppableId];
        const newPlayerIds = Array.from(card.playerIds);
        newPlayerIds.splice(source.index, 1);
        newPlayerIds.splice(destination.index, 0, draggableId);
        const newCard = {
          ...card,
          playerIds: newPlayerIds
        };
        const newState = {
          ...state,
          cards: {
            ...state.cards,
            [newCard.id]: newCard
          }
        }
        setState(newState);
        return
      }
      // move to another card
      const startPlayerIds = Array.from(start.playerIds);
      startPlayerIds.splice(source.index, 1);
      const newStart = {
        ...start,
        playerIds: startPlayerIds
      }
  
      const finishPlayerIds = Array.from(finish.playerIds);
      finishPlayerIds.splice(destination.index, 0, draggableId);
      const newFinish = {
        ...finish,
        playerIds: finishPlayerIds
      }
  
      const newState = {
        ...state,
        cards: {
          ...state.cards,
          [newStart.id]: newStart,
          [newFinish.id]: newFinish
        }
      }
      setState(newState);
      return;
    }
  }

  return (
    <React.Fragment>
      <Title>Among Us Tracker <AiOutlineReload onClick={handleReset} style={ResetIcon}/></Title>
      <DragDropContext onDragEnd={onDragEnd}>
          <Droppable droppableId="all-cards" direction="horizontal" type="card">
            {(provided) => (
              <CardContainer ref={provided.innerRef} {...provided.droppableProps} isWide={windowWidth > 1366 ? true : false}>
                {
                  state.cardOrder.map((cardId, index) => {
                    const card = state.cards[cardId];
                    const players = card.playerIds.map(playerId => state.players[playerId]);
                    return <Card key={cardId} card={card} players={players} index={index} />
                  })
                }
                {provided.placeholder}
              </CardContainer>
            )}
          </Droppable>
      </DragDropContext>
    </React.Fragment>
  )
}

export default App;