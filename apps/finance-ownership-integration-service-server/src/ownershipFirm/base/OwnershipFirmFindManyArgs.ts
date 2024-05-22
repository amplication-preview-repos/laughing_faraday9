/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { ArgsType, Field } from "@nestjs/graphql";
import { ApiProperty } from "@nestjs/swagger";
import { OwnershipFirmWhereInput } from "./OwnershipFirmWhereInput";
import { IsOptional, ValidateNested, IsInt } from "class-validator";
import { Type } from "class-transformer";
import { OwnershipFirmOrderByInput } from "./OwnershipFirmOrderByInput";

@ArgsType()
class OwnershipFirmFindManyArgs {
  @ApiProperty({
    required: false,
    type: () => OwnershipFirmWhereInput,
  })
  @IsOptional()
  @ValidateNested()
  @Field(() => OwnershipFirmWhereInput, { nullable: true })
  @Type(() => OwnershipFirmWhereInput)
  where?: OwnershipFirmWhereInput;

  @ApiProperty({
    required: false,
    type: [OwnershipFirmOrderByInput],
  })
  @IsOptional()
  @ValidateNested({ each: true })
  @Field(() => [OwnershipFirmOrderByInput], { nullable: true })
  @Type(() => OwnershipFirmOrderByInput)
  orderBy?: Array<OwnershipFirmOrderByInput>;

  @ApiProperty({
    required: false,
    type: Number,
  })
  @IsOptional()
  @IsInt()
  @Field(() => Number, { nullable: true })
  @Type(() => Number)
  skip?: number;

  @ApiProperty({
    required: false,
    type: Number,
  })
  @IsOptional()
  @IsInt()
  @Field(() => Number, { nullable: true })
  @Type(() => Number)
  take?: number;
}

export { OwnershipFirmFindManyArgs as OwnershipFirmFindManyArgs };
