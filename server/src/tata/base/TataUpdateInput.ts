import { InputType, Field } from "@nestjs/graphql";
import { ApiProperty } from "@nestjs/swagger";
import { BlaBlaWhereUniqueInput } from "../../blaBla/base/BlaBlaWhereUniqueInput";
import { ValidateNested, IsOptional } from "class-validator";
import { Type } from "class-transformer";
@InputType()
class TataUpdateInput {
  @ApiProperty({
    required: false,
    type: () => BlaBlaWhereUniqueInput,
  })
  @ValidateNested()
  @Type(() => BlaBlaWhereUniqueInput)
  @IsOptional()
  @Field(() => BlaBlaWhereUniqueInput, {
    nullable: true,
  })
  todo?: BlaBlaWhereUniqueInput | null;
}
export { TataUpdateInput };
