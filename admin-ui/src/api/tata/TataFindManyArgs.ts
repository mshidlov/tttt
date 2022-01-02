import { TataWhereInput } from "./TataWhereInput";
import { TataOrderByInput } from "./TataOrderByInput";

export type TataFindManyArgs = {
  where?: TataWhereInput;
  orderBy?: TataOrderByInput;
  skip?: number;
  take?: number;
};
