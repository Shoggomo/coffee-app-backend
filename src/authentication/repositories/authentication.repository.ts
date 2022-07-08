import { Repository } from 'typeorm';
import { AuthenticationEntity } from '../entities';
import { CustomRepository } from '../../typeorm/typeorm-ex.decorator';

@CustomRepository(AuthenticationEntity)
export class AuthenticationRepository extends Repository<AuthenticationEntity> {}
