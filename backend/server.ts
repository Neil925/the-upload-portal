import express from 'express';
import { checkUsers, createUser, test } from './database.ts';
import { generateSalt } from './helpers.ts';
import { hash } from 'crypto';

const app = express();
app.use(express.json());

app.get('/', async (req, res) => {
  try {
    let answer = await test();
    res.send(answer);
  }
  catch (err) {
    console.error(`Failed with: ${err}`);
    res.status(500).send("failed.");
  }
});

app.get('/users', async (req, res) => {
  try {
    let users = await checkUsers();
    res.send(users);
  } catch (err) {
    console.error(err);
    res.status(500).send("failed.");
  }
});

app.post('/createUser', async (req, res) => {
  let newUser = req.body as NewUser;

  if (Object.values(newUser).includes(x => x === null || x === undefined))
    throw new Error("Bad");

  let salt = generateSalt();
  let hashVal = hash("sha1", newUser.password + salt);

  createUser(newUser, salt, hashVal);

  res.send("Adding user to database.");
});

app.listen(3000);

console.log(`Hello, ${process.env.MYSQL_USER}`);
