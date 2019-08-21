
// GET https://api.twitch.tv/kraken/streams/?limit=10

// response.streams = [ obj, obj, obj ]

let streamer = {
  time: Date.now(),
  viewers: obj.viewers, // 171708
  game: obj.game, // 'Overwatch'
  name: obj.channel.name,
  logo: obj.channel.logo
};

// GET https://api.twitch.tv/kraken/games/top

// response.top = [ obj, obj, obj ]

let game = {
  time: Date.now(),
  channels: obj.channels, // 953
  viewers: obj.viewers, // 171708
  name: obj.name, // 'Counter-Strike: Global Offensive
  logo: obj.game.logo.large // "https://static-cdn.jtvnw.net/ttv-boxart/Counter-Strike:%20Global%20Offensive-272x380.jpg"
};