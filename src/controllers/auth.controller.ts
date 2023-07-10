import { Request, Response } from "express";
import { registerNewUser, loginUser } from "../repositories/auth.repository";
import { handleHttp } from "../utils/error.handle";
import { validate, ValidationError } from "class-validator";
import { CreateUserDTO } from "../dtos/user.dto";

const registerCtrl = async ({ body }: Request, res: Response) => {
  try {
    const userDTO = new CreateUserDTO();

    Object.assign(userDTO, body);

    const errors = await validate(userDTO);

    if (errors.length > 0) {
      const finalString: string[] = errors.map((error: ValidationError) => {
        return `${Object.values(error.constraints!).join(",")}`;
      });

      throw new Error(finalString.join(", "));
    }

    const response = await registerNewUser(body);

    res.send(response);
  } catch (error) {
    const errorMessage = (error as Error).message; // Type assertion to tell TypeScript that error is of type Error

    handleHttp(res, errorMessage);
  }
};

const loginCtrl = async ({ body }: Request, res: Response) => {
  try {
    const { email, password } = body;

    const response = await loginUser(email, password);

    res.send(response);
  } catch (error) {
    console.log(error);

    handleHttp(res, "ERROR");
  }
};

export { registerCtrl, loginCtrl };
