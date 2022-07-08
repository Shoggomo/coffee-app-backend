import { IsNotEmpty, IsString } from 'class-validator';
import { CreateAuthenticationDto } from 'src/authentication/dtos';

export class CreateUserDto extends CreateAuthenticationDto {
  @IsString()
  @IsNotEmpty()
  readonly firstName: string;
}
