import { Module } from '@nestjs/common';
import { UserRepository } from './repositories';
import { UserService } from './services';
import { TypeOrmExModule } from '../typeorm/typeorm-ex.module';
import { UserController } from './controllers';

@Module({
  imports: [TypeOrmExModule.forCustomRepository([UserRepository])],
  providers: [UserService],
  exports: [UserService],
  controllers: [UserController],
})
export class UserModule {}
