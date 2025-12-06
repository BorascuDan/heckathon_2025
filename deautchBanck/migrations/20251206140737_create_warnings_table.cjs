
exports.up = function (knex) {
    return knex.schema.createTable('warnings', function (table) {
        table.increments('id').primary();
        table.string('name', 50).notNullable();
        table.string('message').notNullable();
    });
};

exports.down = function (knex) {
    return knex.schema.dropTable('warnings');
};