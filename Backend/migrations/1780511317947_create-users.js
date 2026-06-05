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
  pgm.createTable("users", {
    id: "id",
    name: {
      type: "varchar(200)",
      notNull: true,
    },
    email: {
      type: "varchar(200)",
      notNull:true,
      unique:true
    },
    password:{
      type:"varchar(50)",
      notNull:true
    },
    role_id:{
      type:"integer",
      references:"roles(id)",
      notNull:true,
      onDelete:"RESTRICT"
    }
  });
};

/**
 * @param pgm {import('node-pg-migrate').MigrationBuilder}
 * @param run {() => void | undefined}
 * @returns {Promise<void> | void}
 */
export const down = (pgm) => {
  
};
