import mysql from "mysql";

let { MYSQL_USER, MYSQL_PASS, MYSQL_DB } = process.env;

let connection = mysql.createConnection({
  host: 'localhost',
  user: MYSQL_USER,
  password: MYSQL_PASS,
  database: MYSQL_DB
});

connection.connect((err) => {
  if (err)
    throw err;
});

export const test = () => {
  return new Promise((res, rej) => {
    connection.query('SELECT 1 + 1 AS result', function(error, results) {
      if (error) rej(error);
      console.log(results);
      res(results);
    });
  });
}

export const createUser = (user: NewUser, salt: string, hash: string) => {
  return new Promise((res, rej) => {
    let sql = 'INSERT INTO users (username, email, birthday, hash, salt) VALUES ?';
    let values = [
      [user.username, user.email, new Date(user.birthday), hash, salt]
    ];

    connection.query(sql, [values], function(error, results) {
      if (error) rej(error);
      console.log(results);
      res(results);
    });
  });
}

export const checkUsers = () => {
  return new Promise((res, rej) => {
    let sql = 'SELECT * FROM users';

    connection.query(sql, function(error, results) {
      if (error) rej(error);
      console.log(results);
      res(results);
    });
  });
}

process.on("exit", () => connection.end());
