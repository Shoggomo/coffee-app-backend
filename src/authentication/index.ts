import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UserModule } from 'src/user';
import { AuthenticationController } from './controllers';
import { AuthenticationRepository } from './repositories';
import { AuthenticationService } from './services';
import { TypeOrmExModule } from '../typeorm/typeorm-ex.module';

@Module({
  imports: [UserModule, TypeOrmExModule.forCustomRepository([AuthenticationRepository])],
  providers: [AuthenticationService],
  controllers: [AuthenticationController],
})
export class AuthenticationModule {}
