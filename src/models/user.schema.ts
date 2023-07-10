import { Schema, model } from "mongoose";
import { User } from "../interfaces/user.interface";

const UserSchema = new Schema<User>(
  {
    firstName: {
      type: String,
      required: true,
    },
    lastName: {
      type: String,
      required: false,
    },
    address: {
      type: String,
      required: false,
    },
    city: {
      type: String,
      required: false,
    },
    state: {
      type: String,
      required: false,
    },
    zip: {
      type: String,
      required: false,
    },
    phone: {
      type: String,
      required: false,
    },
    role: {
      type: String,
      required: false,
      enum: ["user", "admin"],
    },
    email: {
      type: String,
      required: true,
      unique: true,
    },
    password: {
      type: Schema.Types.Mixed,
      required: true,
    }
  },
  {
    timestamps: true,
    versionKey: false,
  }
);

const UserModel = model("users", UserSchema);
export default UserModel;
