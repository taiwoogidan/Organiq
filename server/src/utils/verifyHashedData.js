import argon2 from "argon2";
const verifyHashedData = async (existingData, dataToVerify) => {
  try {
    const verifyData = await argon2.verify(existingData, dataToVerify);
    return verifyData;
  } catch (error) {
    console.error(error.message);
  }
};
export default verifyHashedData;
