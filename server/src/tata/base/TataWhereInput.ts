import { InputType, Field } from "@nestjs/graphql";
import { ApiProperty } from "@nestjs/swagger";
import { StringFilter } from "../../util/StringFilter";
import { Type } from "class-transformer";
import { IsOptional, ValidateNested } from "class-validator";
import { BlaBlaWhereUniqueInput } from "../../blaBla/base/BlaBlaWhereUniqueInput";
@InputType()
class TataWhereInput {
  @ApiProperty({
    required: false,
    type: StringFilter,
  })
  @Type(() => StringFilter)
  @IsOptional()
  @Field(() => StringFilter, {
    nullable: true,
  })
  id?: StringFilter;

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
  todo?: BlaBlaWhereUniqueInput;
}
export { TataWhereInput };
