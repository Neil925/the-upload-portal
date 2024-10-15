interface NewUser {
  username: string;
  email: string;
  password: string;
  birthday: string;
}

interface User {
  user_id: number;
  username: string;
  email: string;
  birthday: string;
  hash: string;
  salt: string;
}
