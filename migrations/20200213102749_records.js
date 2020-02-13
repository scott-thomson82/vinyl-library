
exports.up = function(knex) {
    return knex.schema.createTable('records', table => {
        table.increments('id')
        table.string('artist')
        table.string('album')
        table.string('genre')
    })
  
};

exports.down = function(knex) {
    return knex.schema.dropTable('records')
  
};
