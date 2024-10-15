import { randomInt } from "node:crypto";
import { getUser } from "./database.ts";
import { encodeHex } from "jsr:@std/encoding/hex";

const encoder = new TextEncoder();

export async function textToHash(text: string, salt: string) {
  const passBuffer = encoder.encode(text + salt);
  const hashBuffer = await crypto.subtle.digest("SHA-1", passBuffer);

  return encodeHex(hashBuffer);
}

export function generateSalt() {
  let result = "";

  for (let i = 0; i < 15; i++) {
    result += String.fromCharCode(randomInt(33, 127));
  }

  return result;
}

export const userExists = async (newUser: NewUser) => {
  const user = await getUser(newUser.email);

  if (user === null) {
    return false;
  }

  return true;
};
