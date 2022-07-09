import { Injectable } from '@nestjs/common';
import { DeptEntity } from '../entities';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { AddDeptDto } from '../dtos';

@Injectable()
export class DeptService {
  constructor(
    @InjectRepository(DeptEntity)
    private readonly _deptRepository: Repository<DeptEntity>,
  ) {}

  async getDeptsForUser(uuid: string): Promise<DeptEntity[]> {
    const depts = this._deptRepository.find({
      where: [{ person1: { uuid: uuid } }, { person2: { uuid: uuid } }],
    });
    return depts;
  }

  async addDept(dept: AddDeptDto): Promise<DeptEntity> {
    //TODO
  }
}
