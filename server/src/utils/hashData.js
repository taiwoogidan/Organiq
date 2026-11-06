import argon2 from "argon2";
export const hashData = async (data) => {
  const hashedData = await argon2.hash(data);
  return hashedData;
};
