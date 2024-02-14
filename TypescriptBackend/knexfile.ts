import type { Knex } from "knex";

const config: { [key: string]: Knex.Config } = {
  development: {
    client: "postgres",
    connection: {
      host: process.env.POSTGRES_HOST || "localhost",
      database: process.env.POSTGRES_DB || "unitraffic",
      user: process.env.POSTGRES_USER || "unitraffic",
      password: process.env.POSTGRES_PASSWORD || "unitraffic",
      port: parseInt(process.env.POSTGRES_PORT || "5432", 10)
    }
  }
};

module.exports = config;