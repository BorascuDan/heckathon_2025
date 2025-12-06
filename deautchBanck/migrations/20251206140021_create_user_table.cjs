
exports.up = function (knex) {
    return knex.schema.createTable('users', function (table) {
        table.increments('id').primary();
        table.string('username', 50).notNullable();
        table.string('email', 100).notNullable().unique();
        table.string('password', 100).notNullable();
        table.integer('age').notNullable();

        table
            .integer('personality_id')
            .unsigned()
            .references('id')
            .inTable('personality')
            .onDelete('SET NULL')
            .nullable();

        table.timestamp('account_creation_date').defaultTo(knex.fn.now());
        table.timestamps(true, true);
    });
};

exports.down = function (knex) {
    return knex.schema.dropTable('users');
};