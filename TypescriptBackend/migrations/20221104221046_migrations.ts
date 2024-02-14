import { Knex } from "knex";


export async function up(knex: Knex): Promise<void> {
    // Creates ALL tables
    await knex.schema.createTable('cameras', (table: Knex.TableBuilder) => {
        table.uuid('id').defaultTo(knex.raw('gen_random_uuid()')).primary().notNullable().unique();
        table.string('place').notNullable();
        table.string('type').notNullable();
        table.specificType('rooms', 'integer array');
    });

    await knex.schema.createTable('records', (table: Knex.TableBuilder) => {
        table.uuid('id').defaultTo(knex.raw('gen_random_uuid()')).primary().notNullable().unique();
        table.uuid('camera_id').references('id').inTable('cameras').notNullable().onDelete('CASCADE');
        table.integer('number_of_people').notNullable();
        table.timestamp('time').notNullable();
    });
}


export async function down(knex: Knex): Promise<void> {
    await knex.schema.dropTable('records');
    await knex.schema.dropTable('cameras');
}

