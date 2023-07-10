import { Auth } from "./auth.interface";

export interface User extends Auth {
    firstName: string;
    lastName: string;
    address: string;
    city: string;
    state: string;
    zip: string;
    phone: string;
    role: "user" | "admin";
} 