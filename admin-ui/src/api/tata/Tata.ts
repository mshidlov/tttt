import { BlaBla } from "../blaBla/BlaBla";
import { User } from "../user/User";

export type Tata = {
  id: string;
  createdAt: Date;
  updatedAt: Date;
  todo?: BlaBla | null;
  users?: Array<User>;
};
