import * as Joi from '@hapi/joi';
import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { NODE_ENV } from './constants';
import { DatabaseModule } from '../database';
import { UserModule } from '../user';
import { AuthenticationModule } from '../authentication';
import { TypeOrmExModule } from '../typeorm/typeorm-ex.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      validationSchema: Joi.object({
        PORT: Joi.number().required(),
        NODE_ENV: Joi.string()
          .required()
          .valid(NODE_ENV.DEVELOPMENT, NODE_ENV.PRODUCTION),
        POSTGRES_HOST: Joi.string().required(),
        POSTGRES_PORT: Joi.number().required(),
        POSTGRES_USER: Joi.string().required(),
        POSTGRES_PASSWORD: Joi.string().required().allow(''),
        POSTGRES_DB: Joi.string().required(),
      }),
    }),
    TypeOrmExModule,
    DatabaseModule,
    AuthenticationModule,
    UserModule,
  ],
})
export class AppModule {}
