import { Controller, HttpCode, HttpStatus, Get, Param } from '@nestjs/common';
import { UserEntity } from 'src/user/entities';
import { UserService } from '../services';

@Controller('user')
export class UserController {
  constructor(private readonly _userService: UserService) {
  }

  @Get('all')
  @HttpCode(HttpStatus.OK)
  async getAllUsers(): Promise<UserEntity[]> {
    return this._userService.getAllUsers();
  }

  @Get(':uuid')
  @HttpCode(HttpStatus.OK)
  async getUser(@Param() params): Promise<UserEntity | undefined> {
    return this._userService.findById(params.uuid);
  }
}
