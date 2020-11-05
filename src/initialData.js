export const initialData = {
  players: {
    'player-1': { id: 'player-1', content: 'Green' },
    'player-2': { id: 'player-2', content: 'Black' },
    'player-3': { id: 'player-3', content: 'Purple' },
    'player-4': { id: 'player-4', content: 'Blue' },
    'player-5': { id: 'player-5', content: 'Lime' },
    'player-6': { id: 'player-6', content: 'White' },
    'player-7': { id: 'player-7', content: 'Pink' },
    'player-8': { id: 'player-8', content: 'Cyan' },
    'player-9': { id: 'player-9', content: 'Yellow' },
    'player-10': { id: 'player-10', content: 'Red' },
    'player-11': { id: 'player-11', content: 'Brown' },
    'player-12': { id: 'player-12', content: 'Orange' },
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
      title: 'Innoncent',
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