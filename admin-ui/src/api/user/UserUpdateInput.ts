import { BlaBlaUpdateManyWithoutUsersInput } from "./BlaBlaUpdateManyWithoutUsersInput";

export type UserUpdateInput = {
  firstName?: string | null;
  lastName?: string | null;
  username?: string;
  password?: string;
  roles?: Array<string>;
  blaBlas?: BlaBlaUpdateManyWithoutUsersInput;
};
