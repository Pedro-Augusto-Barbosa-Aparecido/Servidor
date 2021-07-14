import knex, { Knex } from "knex";

export async function up (knex: Knex) {
    return knex.schema.createTable("users", table => {
        table.increments("id").primary();
        table.string("name", 70).notNullable();
        table.string("office", 30).notNullable();
        table.string("email", 30).notNullable();
        table.boolean("is_admin").notNullable();
    });
}

export async function down (knex: Knex) {
    return knex.schema.dropTable("users");
}
