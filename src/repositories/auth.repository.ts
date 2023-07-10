import { User } from "../interfaces/user.interface";
import UserModel from "../models/user.schema";
import { bcrypt, verified } from "../utils/bcrypt.handle";
import { generateToken } from "../utils/jwt.handle";

const registerNewUser = async (user: User) => {
  const existEmail = await UserModel.findOne({ email: user.email });

  if (existEmail) {
    throw new Error("Email already exists");
  }

  const passwordHash = await bcrypt(user.password);

  const userToInsert = {
    ...user,
    password: passwordHash,
  };

  const responseInsert = await UserModel.create(userToInsert);

  return responseInsert;
};

const loginUser = async (email: string, password: string) => {
  const userInfo = await UserModel.findOne({ email: email });

  if (!userInfo) {
    throw new Error("Email not found");
  }

  const passwordVerified = verified(password, userInfo.password);

  if (!passwordVerified) {
    throw new Error("Password incorrect");
  }

  const token = generateToken(userInfo._id.toString());

  const parsedData = Object.assign({}, userInfo);

  const data = {
    token,
    user: {
      firstName: userInfo.firstName,
      lastName: userInfo.lastName,
      address: userInfo.address,
      city: userInfo.city,
      state: userInfo.state,
      zip: userInfo.zip,
      phone: userInfo.phone,
      role: userInfo.role,
      email: userInfo.email,
    },
  };

  return data;
};

export { registerNewUser, loginUser };
