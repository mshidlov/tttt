/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/docs/how-to/custom-code

------------------------------------------------------------------------------
  */
import { ArgsType, Field } from "@nestjs/graphql";
import { BlaBlaWhereUniqueInput } from "./BlaBlaWhereUniqueInput";
import { BlaBlaUpdateInput } from "./BlaBlaUpdateInput";

@ArgsType()
class UpdateBlaBlaArgs {
  @Field(() => BlaBlaWhereUniqueInput, { nullable: false })
  where!: BlaBlaWhereUniqueInput;
  @Field(() => BlaBlaUpdateInput, { nullable: false })
  data!: BlaBlaUpdateInput;
}

export { UpdateBlaBlaArgs };
