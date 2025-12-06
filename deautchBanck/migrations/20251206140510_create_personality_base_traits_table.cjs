
exports.up = function (knex) {
    return knex.schema.createTable('personality_base_traits', function (table) {
        table.increments('id').primary();
        table
            .integer('personality_id')
            .unsigned()
            .references('id')
            .inTable('personality')
            .onDelete('SET NULL')
            .nullable();

        table
            .integer('base_trait_id')
            .unsigned()
            .references('id')
            .inTable('base_traits')
            .onDelete('SET NULL')
            .nullable();
    });
};

exports.down = function (knex) {
    return knex.schema.dropTable('personality_base_traits');
};