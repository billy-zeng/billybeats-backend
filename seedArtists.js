const db = require('./models');
const data = require('./data.json');

// seed artists
for(let i=0; i<data.artists.length; i++){
  db.Artist.create(data.artists[i], (err, createdArtist) => {
    if (err) console.log(err);
    console.log(createdArtist);
  })
};
