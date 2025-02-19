import { DefaultUser } from "next-auth";

interface IUser extends DefaultUser {
  roles?: string[];
}

declare module "next-auth" {
  interface User extends IUser { }
  interface session {
    user?: User
  }
}

declare module "next-auth/jwt" {
  interface JWT extends IUser { }
}