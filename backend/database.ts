import process from "node:process";
import mysql from "npm:mysql";

const { MYSQL_USER, MYSQL_PASS, MYSQL_DB } = process.env;

const connection = mysql.createConnection({
  host: "localhost",
  user: MYSQL_USER,
  password: MYSQL_PASS,
  database: MYSQL_DB,
});

connection.connect((err: Error) => {
  if (err) {
    throw err;
  }
});

export function createUser(user: NewUser, salt: string, hash: string) {
  return new Promise((res, rej) => {
    const sql =
      "INSERT INTO users (username, email, birthday, hash, salt) VALUES ?";

    const bday = new Date(user.birthday);

    if (isNaN(bday.valueOf())) {
      rej(`Invalid birthday ${user.birthday}`);
      return;
    }

    const values = [
      [user.username, user.email, bday, hash, salt],
    ];

    connection.query(sql, [values], function (error: Error, results: unknown) {
      if (error) rej(error);
      res(results);
    });
  });
}

export function checkUsers(): Promise<User[]> {
  return new Promise((res, rej) => {
    const sql = "SELECT * FROM users";

    connection.query(sql, function (error: Error, results: User[]) {
      if (error) rej(error);
      res(results);
    });
  });
}

export function getUser(email: string): Promise<User | null> {
  return new Promise((res, rej) => {
    const sql = "SELECT * FROM users WHERE email LIKE ?";

    connection.query(sql, [[email]], function (error: Error, results: User[]) {
      if (error) rej(error);
      if (results.length === 0) res(null);

      res(results[0]);
    });
  });
}

process.on("exit", () => connection.end());
