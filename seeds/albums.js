
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('records').del()
    .then(function () {
      // Inserts seed entries
      return knex('records').insert([
        {id: 1, artist: 'Bob Dylan', album: 'Blonde on Blonde', genre: 'Folk'},
        {id: 2, artist: 'Bon Iver', album: 'Bon Iver', genre: 'Folk'},
        {id: 3, artist: 'Nick Drake', album: 'Pink Moon', genre: 'Folk'}
      ]);
    });
};
