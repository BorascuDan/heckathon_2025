
exports.up = function (knex) {
    return knex.schema.createTable('user_warnings', function (table) {
        table.increments('id').primary();
        table
            .integer('user_id')
            .unsigned()
            .references('id')
            .inTable('users')
            .onDelete('SET NULL')
            .nullable();

        table
            .integer('warning_id')
            .unsigned()
            .references('id')
            .inTable('warnings')
            .onDelete('SET NULL')
            .nullable();

        table.json('trigger_messages').notNullable();
    });
};

exports.down = function (knex) {
    return knex.schema.dropTable('user_warnings');
};