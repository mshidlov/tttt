import { InputType, Field } from "@nestjs/graphql";
import { ApiProperty } from "@nestjs/swagger";
import { IsString, IsOptional, ValidateNested } from "class-validator";
import { TataWhereUniqueInput } from "../../tata/base/TataWhereUniqueInput";
import { Type } from "class-transformer";
@InputType()
class UserUpdateInput {
  @ApiProperty({
    required: false,
    type: String,
  })
  @IsString()
  @IsOptional()
  @Field(() => String, {
    nullable: true,
  })
  firstName?: string | null;

  @ApiProperty({
    required: false,
    type: String,
  })
  @IsString()
  @IsOptional()
  @Field(() => String, {
    nullable: true,
  })
  lastName?: string | null;

  @ApiProperty({
    required: false,
    type: String,
  })
  @IsString()
  @IsOptional()
  @Field(() => String, {
    nullable: true,
  })
  username?: string;

  @ApiProperty({
    required: false,
    type: String,
  })
  @IsString()
  @IsOptional()
  @Field(() => String, {
    nullable: true,
  })
  password?: string;

  @ApiProperty({
    required: false,
    type: [String],
  })
  @IsString({
    each: true,
  })
  @IsOptional()
  @Field(() => [String], {
    nullable: true,
  })
  roles?: Array<string>;

  @ApiProperty({
    required: false,
    type: () => TataWhereUniqueInput,
  })
  @ValidateNested()
  @Type(() => TataWhereUniqueInput)
  @IsOptional()
  @Field(() => TataWhereUniqueInput, {
    nullable: true,
  })
  tata?: TataWhereUniqueInput | null;
}
export { UserUpdateInput };
