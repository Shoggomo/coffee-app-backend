import { Injectable, InternalServerErrorException } from '@nestjs/common';
import { PostgresErrorCode } from 'src/database/constraints';
import { UserEntity } from 'src/user/entities';
import { UserService } from 'src/user/services';
import { Connection, QueryRunner } from 'typeorm';
import { CreateAuthenticationDto } from '../dtos';
import { RegistrationDto } from '../dtos';
import { AuthenticationEntity } from '../entities';
import { UserAlreadyExistException } from '../exceptions';
import { AuthenticationRepository } from '../repositories';
import { AuthenticationProvider } from '../providers';

@Injectable()
export class AuthenticationService {
  constructor(
    private readonly _authenticationRepository: AuthenticationRepository,
    private readonly _userService: UserService,
    private readonly _connection: Connection,
  ) {}

  async registration(registrationDto: RegistrationDto): Promise<UserEntity> {
    let user: UserEntity;
    const queryRunner = this._connection.createQueryRunner();

    await queryRunner.connect();
    await queryRunner.startTransaction();

    try {
      const authentication = await this._createAuthentication(
        registrationDto,
        queryRunner,
      );

      user = await this._userService.createUser(
        registrationDto,
        authentication,
        queryRunner,
      );

      await queryRunner.commitTransaction();
    } catch (error) {
      await queryRunner.rollbackTransaction();

      if (error?.code === PostgresErrorCode.UniqueViolation) {
        throw new UserAlreadyExistException();
      }

      throw new InternalServerErrorException();
    } finally {
      await queryRunner.release();
    }

    return user;
  }

  private async _createAuthentication(
    createAuthenticationDto: CreateAuthenticationDto,
    queryRunner: QueryRunner,
  ): Promise<AuthenticationEntity> {
    const authentication = this._authenticationRepository.create(
      createAuthenticationDto,
    );

    return queryRunner.manager.save(authentication);
  }

  public async findAuth(
    emailAddress: string,
  ): Promise<AuthenticationEntity | undefined> {
    return this._authenticationRepository.findOneBy({ emailAddress });
  }

  async validateUser(
    emailAddress: string,
    pass: string,
  ): Promise<AuthenticationEntity | null> {
    const hashed = await AuthenticationProvider.generateHash(pass);
    const auth = await this.findAuth(emailAddress);
    if (auth && auth.password === hashed) {
      return auth;
    }
    return null;
  }
}
