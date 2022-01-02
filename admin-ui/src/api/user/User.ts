import { Tata } from "../tata/Tata";

export type User = {
  id: string;
  createdAt: Date;
  updatedAt: Date;
  firstName: string | null;
  lastName: string | null;
  username: string;
  roles: Array<string>;
  tata?: Tata | null;
};
