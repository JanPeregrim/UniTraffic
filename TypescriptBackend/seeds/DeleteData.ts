import { Knex } from "knex";

export async function seed(knex: Knex): Promise<void> {
    await knex('records').del();
    await knex('cameras').del();
}