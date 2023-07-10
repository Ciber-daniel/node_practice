import { IsString, IsEmail, IsNotEmpty, IsEnum } from "class-validator";

export class CreateUserDTO {
  constructor() {
    this.firstName = "";
    this.lastName = "";
    this.address = "";
    this.city = "";
    this.state = "";
    this.zip = "";
    this.phone = "";
    this.role = "";
    this.email = "";
    this.password = "";
  }

  @IsNotEmpty()
  @IsString()
  firstName: string;

  @IsNotEmpty()
  @IsString()
  lastName: string;

  @IsNotEmpty()
  @IsString()
  address: string;

  @IsNotEmpty()
  @IsString()
  city: string;

  @IsNotEmpty()
  @IsString()
  state: string;

  @IsNotEmpty()
  @IsString()
  zip: string;

  @IsString()
  @IsNotEmpty()
  phone: string;

  @IsNotEmpty()
  @IsString()
  @IsEnum(["user", "admin"])
  role: string;

  @IsNotEmpty()
  @IsString()
  @IsEmail()
  email: string;

  @IsNotEmpty()
  @IsString()
  password: string;
}
