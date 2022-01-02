import { ArgsType, Field } from "@nestjs/graphql";
import { TataWhereUniqueInput } from "./TataWhereUniqueInput";

@ArgsType()
class TataFindUniqueArgs {
  @Field(() => TataWhereUniqueInput, { nullable: false })
  where!: TataWhereUniqueInput;
}

export { TataFindUniqueArgs };
