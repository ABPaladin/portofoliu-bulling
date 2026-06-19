// External media for the students' page (YouTube videos + Padlet games).
// Titles are the real video names (same in every language).

export const ytEmbed = (id) =>
  `https://www.youtube-nocookie.com/embed/${id}?rel=0`
export const ytWatch = (id) => `https://www.youtube.com/watch?v=${id}`

// Ordered to reproduce the requested grid (left column: 1,3,5 · right column: 2,4).
export const studentVideos = [
  { id: '_F0X93MvFS8', title: 'Colega nouă – Film Antibullying', author: 'Asociația Politeia' },
  { id: 'gJysJu_Zs7E', title: 'Despre VIOLENȚĂ – pe înțelesul copiilor', author: 'Maria-Ramona Păuna' },
  { id: '220AqLfNY6Q', title: 'Bullying – Tu mă poți ajuta', author: 'UNICEF Moldova' },
  { id: 'pjNY2pPEw6c', title: 'VR Bullying – animație', author: 'FITT Timișoara' },
  { id: 'l3lBSnOJ5lM', title: 'Ce este bullyingul?', author: 'Salvați Copiii România' },
]

// Padlet "arcade" interactive games, mapped to the two on-page game cards.
export const studentGames = [
  { key: 'game1', url: 'https://arcade.padlet.com/game/3qpA6YonKD' },
  { key: 'game2', url: 'https://arcade.padlet.com/game/3ZjOYBzEKO' },
]
