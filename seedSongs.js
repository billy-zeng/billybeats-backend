const db = require('./models');
const data = require('./data.json');

// seed songs 
for(let i=0; i<data.artists.length; i++){
  for(let j=0; j<2; j++){
    db.Team.findOne({ artistIndex: i }, (err, foundArtist) => {
      if (err) console.log(err);
      let artistId = foundArtist._id;
      console.log(artistId);
      db.Player.create(data.songs[i][j], (err, createdSong) => {
        if (err) console.log(err);
        createdSong.artist = artistId;
        createdSong.save();
        console.log(createdSong);
        foundArtist.songs.push(createdSong._id);
        foundArtist.save();
        console.log(foundArtist);
      });
    });
  };
};
