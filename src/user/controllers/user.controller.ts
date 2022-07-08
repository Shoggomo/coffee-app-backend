import { Controller, HttpCode, HttpStatus, Get } from '@nestjs/common';
import { UserEntity } from 'src/user/entities';
import { UserService } from '../services';

@Controller('user')
export class UserController {
  constructor(private readonly _userService: UserService) {}

  @Get('all')
  @HttpCode(HttpStatus.OK)
  async registration(): Promise<UserEntity[]> {
    return this._userService.getAllUsers();
  }
}
