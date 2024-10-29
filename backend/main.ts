// @deno-types="npm:@types/express@4.17.15"
import express from "npm:express";
import { checkUsers, createUser, getUser } from "./database.ts";
import { generateSalt, textToHash, userExists } from "./helpers.ts";
import process from "node:process";

function main() {
  const app = express();
  app.use(express.json());

  app.get("/", (_req, res) => {
    try {
      res.send("Hello world!");
    } catch (err) {
      console.error(`Failed with: ${err}`);
      res.status(500).send("failed.");
    }
  });

  app.get("/users", async (_req, res) => {
    try {
      const users = await checkUsers();
      res.send(users);
    } catch (err) {
      console.error(err);
      res.status(500).send("failed.");
    }
  });

  app.post("/createUser", async (req, res) => {
    const newUser = req.body as NewUser;

    if (
      newUser.birthday === undefined || newUser.email === undefined ||
      newUser.username === undefined ||
      !newUser.password === undefined
    ) {
      res.status(400).send("Bad content body. Contact an administrator.");
      return;
    }

    if (newUser.email.match(/.*@.*\..*/) === null) {
      res.status(400).send("Invalid email.");
      return;
    }

    const bday = new Date(newUser.birthday);

    if (isNaN(bday.valueOf())) {
      res.status(400).send("Invalid birthdate.");
      return;
    }

    const age = new Date(Date.now()).getFullYear() - bday.getFullYear();

    if (age < 16 || age > 110) {
      res.status(400).send("Invalid birthdate.");
      return;
    }

    if (await userExists(newUser)) {
      res.status(400).send("User already exists!");
      return;
    }

    const salt = generateSalt();
    const hash = await textToHash(newUser.password, salt);

    try {
      await createUser(newUser, salt, hash);
      res.send("Added user to database.");
    } catch (error) {
      console.error(error);
      res.status(400).send("Failed to create user!");
      console.error(error);
    }
  });

  app.post("/signin", async (req, res) => {
    const { email, password } = req.body;

    if (email === undefined || password === undefined) {
      res.status(400).send("Invalid body!");
      return;
    }

    const user = await getUser(email);

    if (user === null) {
      res.status(400).send("Bad email or password.");
      return;
    }

    if (user.hash === await textToHash(password, user.salt)) {
      res.send("Singed in.");
      return;
    }

    res.status(400).send("Bad email or password.");
  });

  app.listen(process.env.PORT);

  console.log(`Hello, ${process.env.MYSQL_USER}`);
}

if (import.meta.main) {
  main();
}
