
exports.up = function (knex) {
    return knex.schema.createTable('chat', function (table) {
        table.increments('id').primary();
        table
            .integer('user_id')
            .unsigned()
            .references('id')
            .inTable('users')
            .onDelete('SET NULL')
            .nullable();

        table.json('messages').notNullable();
    });
};

exports.down = function (knex) {
    return knex.schema.dropTable('chat');
};