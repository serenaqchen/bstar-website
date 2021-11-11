import dotenv from "dotenv";
import { query } from "express";
import pgp from "pg-promise";

import { DOTENV_FILE } from "./constants.mjs";

const db = initDb();

export const addOrUpdateUser = (user) =>
  db.one(
    `INSERT INTO users(given_name, family_name, picture, email, sub)
      VALUES($<given_name>, $<family_name>, $<picture>, $<email>, $<sub>)
      ON CONFLICT (sub) DO
        UPDATE SET given_name = $<given_name>, family_name = $<family_name>,
          picture = $<picture>, email=$<email>
      RETURNING *`,
    user,
  );

//getting items from either brunch or dinner menu
export const getFoodItems = (type) => {
  if (type === "brunch") {
    return db.any(
      `SELECT brunch.id , menu.title, brunch.course, brunch.price, brunch.allergens, menu.description FROM brunch LEFT JOIN menu ON brunch.menu_id=menu.id`,
    );
  } else if (type === "dinner") {
    return db.any(
      `SELECT dinner.id , menu.title, dinner.course, dinner.price, dinner.allergens, menu.description FROM dinner LEFT JOIN menu ON dinner.menu_id=menu.id`,
      [type],
    );
  }
};

export const getModifications = (type) => {
  if (type === "brunch") {
    return db.any(
      `SELECT brunch.id , menu.title, brunch_modifications.description, brunch_modifications.price FROM brunch LEFT JOIN menu ON brunch.menu_id=menu.id RIGHT JOIN brunch_modifications ON brunch_modifications.brunch_id=brunch.id ORDER BY brunch_modifications.price ASC;`,
    );
  } else if (type === "dinner") {
    return db.any(
      `SELECT dinner.id , menu.title, dinner_modifications.description, dinner_modifications.price FROM dinner LEFT JOIN menu ON dinner.menu_id=menu.id RIGHT JOIN dinner_modifications ON dinner_modifications.dinner_id=dinner.id ORDER BY dinner_modifications.price ASC;`,
      [type],
    );
  }
};

function initDb() {
  let connection;

  if (process.env.DATABASE_URL === undefined) {
    dotenv.config({ path: DOTENV_FILE });
    connection = {
      user: "postgres",
      database: process.env.POSTGRES_DB,
      password: process.env.POSTGRES_PASSWORD,
      port: 5442,
    };
  } else {
    connection = {
      connectionString: process.env.DATABASE_URL,
      ssl: { rejectUnauthorized: false },
    };
  }

  return pgp()(connection);
}
