
exports.up = function(knex) {
  return knex.schema.alterTable('chat', function(table) {
    table.string('key').nullable();
  });
};

exports.down = function(knex) {
  return knex.schema.alterTable('chat', function(table) {
    table.dropColumn('key');
  });
};
