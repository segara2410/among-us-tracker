export const initialData = {
  players: {
    'player-1': { id: 'player-1', content: 'Green', color: '#127f2f'},
    'player-2': { id: 'player-2', content: 'Black', color: '#3e464d'},
    'player-3': { id: 'player-3', content: 'Purple', color: '#691cce'},
    'player-4': { id: 'player-4', content: 'Blue', color: '#001de3'},
    'player-5': { id: 'player-5', content: 'Lime', color: '#50ee37'},
    'player-6': { id: 'player-6', content: 'White', color: '#d9e2f1'},
    'player-7': { id: 'player-7', content: 'Pink', color: '#eb54b9'},
    'player-8': { id: 'player-8', content: 'Cyan', color: '#27feec'},
    'player-9': { id: 'player-9', content: 'Yellow', color: '#f5f656'},
    'player-10': { id: 'player-10', content: 'Red', color: '#f40000'},
    'player-11': { id: 'player-11', content: 'Brown', color: '#704a1e'},
    'player-12': { id: 'player-12', content: 'Orange', color: '#ef7e0e'},
  },
  cards: {
    'card-1': {
      id: 'card-1',
      title: 'Unknown',
      playerIds: ['player-1', 'player-2', 'player-3', 'player-4', 'player-5', 'player-6', 'player-7', 'player-8', 'player-9', 'player-10', 'player-11', 'player-12'],
      color: '#17C9FF',
    },
    'card-2': {
      id: 'card-2',
      title: 'Innocent',
      playerIds: [],
      color: '#14E668',
    },
    'card-3': {
      id: 'card-3',
      title: 'Suspicious',
      playerIds: [],
      color: '#f0c500',
    },
    'card-4': {
      id: 'card-4',
      title: 'Impostor',
      playerIds: [],
      color: '#fa5e5b',
    },
    'card-5': {
      id: 'card-5',
      title: 'Dead',
      playerIds: [],
      color: '#2d3e52',
    },
  },
  cardOrder: ['card-1', 'card-2', 'card-3', 'card-4', 'card-5']
}