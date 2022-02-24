import { User } from "../user/User";

export type BlaBla = {
  id: string;
  createdAt: Date;
  updatedAt: Date;
  users?: Array<User>;
};
