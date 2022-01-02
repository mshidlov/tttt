import { StringFilter } from "../../util/StringFilter";
import { BlaBlaWhereUniqueInput } from "../blaBla/BlaBlaWhereUniqueInput";

export type TataWhereInput = {
  id?: StringFilter;
  todo?: BlaBlaWhereUniqueInput;
};
