import { ArgsType, Field } from "@nestjs/graphql";
import { TataCreateInput } from "./TataCreateInput";

@ArgsType()
class CreateTataArgs {
  @Field(() => TataCreateInput, { nullable: false })
  data!: TataCreateInput;
}

export { CreateTataArgs };
