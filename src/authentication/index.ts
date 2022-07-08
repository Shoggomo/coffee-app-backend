import { Module } from '@nestjs/common';
import { UserModule } from 'src/user';
import { AuthenticationController } from './controllers';
import { AuthenticationRepository } from './repositories';
import { AuthenticationService } from './services';
import { TypeOrmExModule } from '../typeorm/typeorm-ex.module';
import { LocalStrategy } from './local.strategy';

@Module({
  imports: [UserModule, TypeOrmExModule.forCustomRepository([AuthenticationRepository])],
  providers: [AuthenticationService, LocalStrategy],
  controllers: [AuthenticationController],
  exports: [AuthenticationService],
})
export class AuthenticationModule {}
