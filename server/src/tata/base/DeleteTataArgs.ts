import { ArgsType, Field } from "@nestjs/graphql";
import { TataWhereUniqueInput } from "./TataWhereUniqueInput";

@ArgsType()
class DeleteTataArgs {
  @Field(() => TataWhereUniqueInput, { nullable: false })
  where!: TataWhereUniqueInput;
}

export { DeleteTataArgs };
