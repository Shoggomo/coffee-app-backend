import { IsNotEmpty, IsString } from 'class-validator';

export class GetDeptsDto {
  @IsString()
  @IsNotEmpty()
  readonly username: string;
}
