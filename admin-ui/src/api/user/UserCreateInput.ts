import { TataWhereUniqueInput } from "../tata/TataWhereUniqueInput";

export type UserCreateInput = {
  firstName?: string | null;
  lastName?: string | null;
  username: string;
  password: string;
  roles: Array<string>;
  tata?: TataWhereUniqueInput | null;
};
