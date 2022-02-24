import { StringFilter } from "../../util/StringFilter";
import { UserListRelationFilter } from "../user/UserListRelationFilter";

export type BlaBlaWhereInput = {
  id?: StringFilter;
  users?: UserListRelationFilter;
};
