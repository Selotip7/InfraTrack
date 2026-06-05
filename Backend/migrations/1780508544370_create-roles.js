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
  // pgm.createType("role_name",["admin","reporter","officer"]);
  pgm.createTable("roles",{
    id:"id",
    name:{
      type:"varchar(20)",
      unique:true,
      notNull:true,
    },


  });
};

/**
 * @param pgm {import('node-pg-migrate').MigrationBuilder}
 * @param run {() => void | undefined}
 * @returns {Promise<void> | void}
 */
export const down = (pgm) => {
  pgm.dropTable("roles");
  // pgm.dropType("role_name");
  
};
