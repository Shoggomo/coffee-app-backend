import { Injectable } from '@nestjs/common';
import { CreateUserDto } from 'src/user/dtos';
import { AuthenticationEntity } from 'src/authentication/entities';
import { QueryRunner } from 'typeorm';
import { UserEntity } from '../entities';
import { UserRepository } from '../repositories';

@Injectable()
export class UserService {
  constructor(private readonly _userRepository: UserRepository) {
  }

  async createUser(
    createUserDto: CreateUserDto,
    authentication: AuthenticationEntity,
    queryRunner: QueryRunner,
  ): Promise<UserEntity> {
    const user = this._userRepository.create({
      ...createUserDto,
      authentication,
    });

    return queryRunner.manager.save(user);
  }
}
