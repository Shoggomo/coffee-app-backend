import { Body, Controller, Get, HttpCode, HttpStatus, Param, Post } from '@nestjs/common';
import { DeptEntity } from '../entities';
import { DeptService } from '../services/dept.service';
import { AddDeptDto } from '../dtos';

@Controller('depts')
export class DeptController {
  constructor(private readonly _deptService: DeptService) {
  }

  @Post('/')
  @HttpCode(HttpStatus.OK)
  async addDept(@Body() body: AddDeptDto): Promise<DeptEntity> {
    return await this._deptService.addDept(body);
  }

  @Get('/:uuid')
  @HttpCode(HttpStatus.OK)
  async getDepts(@Param() params): Promise<DeptEntity[]> {
    return await this._deptService.getDeptsForUser(params.uuid);
  }
}
