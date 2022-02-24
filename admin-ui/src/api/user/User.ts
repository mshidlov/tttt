import { BlaBla } from "../blaBla/BlaBla";

export type User = {
  id: string;
  createdAt: Date;
  updatedAt: Date;
  firstName: string | null;
  lastName: string | null;
  username: string;
  roles: Array<string>;
  blaBlas?: Array<BlaBla>;
};
