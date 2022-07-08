import { Controller, Get, HttpCode, HttpStatus, Param } from '@nestjs/common';
import { UserService } from '../../user/services';

@Controller('depts')
export class DeptController {
  constructor(private readonly _userService: UserService) {}

  @Get('/:uuid')
  @HttpCode(HttpStatus.OK)
  async getDepts(@Param() params){

  }
}
