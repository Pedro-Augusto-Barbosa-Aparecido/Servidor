import { Knex } from "knex";

export async function seed (knex: Knex) {
    await knex("users").insert([
        {
            name: "Pedro",
            office: "Professional",
            email: "user1@company.com",
            is_admin: false
        },
        {
            name: "Pedro",
            office: "Boss",
            email: "user2@company.com",
            is_admin: true
        },
        {
            name: "Pedro",
            office: "Professional",
            email: "user3@company.com",
            is_admin: false
        },
        {
            name: "Pedro",
            office: "Professional",
            email: "user4@company.com",
            is_admin: false
        },
        {
            name: "Pedro",
            office: "Professional",
            email: "user5@company.com",
            is_admin: true
        },
    ]);
}
