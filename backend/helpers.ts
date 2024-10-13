import { randomInt } from "crypto";

export const generateSalt = () => {
  let result = "";

  for (let i = 0; i < 15; i++)
    result += String.fromCharCode(randomInt(33, 127));

  return result;
}
