import { ArgsType, Field } from "@nestjs/graphql";
import { TataWhereUniqueInput } from "./TataWhereUniqueInput";
import { TataUpdateInput } from "./TataUpdateInput";

@ArgsType()
class UpdateTataArgs {
  @Field(() => TataWhereUniqueInput, { nullable: false })
  where!: TataWhereUniqueInput;
  @Field(() => TataUpdateInput, { nullable: false })
  data!: TataUpdateInput;
}

export { UpdateTataArgs };
