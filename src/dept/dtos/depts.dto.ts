import { IsNotEmpty, IsString } from 'class-validator';

export class AddDeptDto {
  @IsString()
  @IsNotEmpty()
  readonly person1UUID: string;

  @IsString()
  @IsNotEmpty()
  readonly person2UUID: string;

  @IsString()
  @IsNotEmpty()
  readonly amount: number;
}
