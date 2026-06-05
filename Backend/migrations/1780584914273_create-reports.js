import { text } from 'node:stream/consumers';

/**
 * @type {import('node-pg-migrate').ColumnDefinitions | undefined}
 */
export const shorthands = undefined;

/**
 * @param pgm {import('node-pg-migrate').MigrationBuilder}
 * @param run {() => void | undefined}
 * @returns {Promise<void> | void}
 */
export const up = (pgm) => {
  const required={
    notNull:true
  }
  pgm.createTable("reports", {
    id: "id",
    tittle: {
      type: "varchar(50)",
      notNull: "true",
    },
    description: {
      type: "text",
      notNull: true,
    },
    category_id: {
      type: "integer",
      references: "categories(id)",
      notNull: true,
      onDelete: "RESTRICT",
    },
    severity_id: {
      type: "integer",
      references: "severities(id)",
      notNull: true,
      onDelete: "RESTRICT",
    },
    reporter_id: {
      type: "integer",
      references: "users(id)",
      notNull: true,
      onDelete: "RESTRICT",
    },
    latitude: {
      type: "numeric(9,6)",
      ...required,
    },
    longitude: {
      type: "numeric(9,6)",
      ...required,
    },
    address: {
      type: "text",
      ...required,
    },
    status_id: {
      type: "integer",
      references: "statues(id)",
      ...required,
      onDelete: "RESTRICT",
    },
    created_at: {
      type: "timestamptz",
      notNull: true,
      default: pgm.func("current_timestamp"),
    },

    updated_at: {
      type: "timestamptz",
      notNull: true,
      default: pgm.func("current_timestamp"),
    },
  });
};

/**
 * @param pgm {import('node-pg-migrate').MigrationBuilder}
 * @param run {() => void | undefined}
 * @returns {Promise<void> | void}
 */
export const down = (pgm) => {
  pgm.dropTable("reports")
};
