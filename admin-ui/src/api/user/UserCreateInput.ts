import { BlaBlaCreateNestedManyWithoutUsersInput } from "./BlaBlaCreateNestedManyWithoutUsersInput";

export type UserCreateInput = {
  firstName?: string | null;
  lastName?: string | null;
  username: string;
  password: string;
  roles: Array<string>;
  blaBlas?: BlaBlaCreateNestedManyWithoutUsersInput;
};
