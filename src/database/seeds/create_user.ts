import { Knex } from "knex";

export async function seed (knex: Knex) {
    await knex("users").insert([
        {
            name: "Pedro",
            office: "Professional",
            email: "user@company.com",
            is_admin: false
        },
        {
            name: "Pedro",
            office: "Boss",
            email: "user@company.com",
            is_admin: true
        },
        {
            name: "Pedro",
            office: "Professional",
            email: "user@company.com",
            is_admin: false
        },
        {
            name: "Pedro",
            office: "Professional",
            email: "user@company.com",
            is_admin: false
        },
        {
            name: "Pedro",
            office: "Professional",
            email: "user@company.com",
            is_admin: true
        },
    ]);
}
