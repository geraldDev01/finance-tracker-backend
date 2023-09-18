import bcrypt from "bcryptjs";

export const encryptPassword = async (password) => {
  const salt = await bcrypt.genSalt(10);
  const passHash = await bcrypt.hash(password, salt);
  return passHash.toString();
};
