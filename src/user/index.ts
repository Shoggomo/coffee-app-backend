import { Module } from '@nestjs/common';
import { UserRepository } from './repositories';
import { UserService } from './services';
import { TypeOrmExModule } from '../typeorm/typeorm-ex.module';

@Module({
  imports: [TypeOrmExModule.forCustomRepository([UserRepository])],
  providers: [UserService],
  exports: [UserService],
})
export class UserModule {}
