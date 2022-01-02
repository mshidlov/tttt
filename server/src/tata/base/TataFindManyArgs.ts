import { ArgsType, Field } from "@nestjs/graphql";
import { ApiProperty } from "@nestjs/swagger";
import { TataWhereInput } from "./TataWhereInput";
import { Type } from "class-transformer";
import { TataOrderByInput } from "./TataOrderByInput";

@ArgsType()
class TataFindManyArgs {
  @ApiProperty({
    required: false,
    type: () => TataWhereInput,
  })
  @Field(() => TataWhereInput, { nullable: true })
  @Type(() => TataWhereInput)
  where?: TataWhereInput;

  @ApiProperty({
    required: false,
    type: TataOrderByInput,
  })
  @Field(() => TataOrderByInput, { nullable: true })
  @Type(() => TataOrderByInput)
  orderBy?: TataOrderByInput;

  @ApiProperty({
    required: false,
    type: Number,
  })
  @Field(() => Number, { nullable: true })
  @Type(() => Number)
  skip?: number;

  @ApiProperty({
    required: false,
    type: Number,
  })
  @Field(() => Number, { nullable: true })
  @Type(() => Number)
  take?: number;
}

export { TataFindManyArgs };
