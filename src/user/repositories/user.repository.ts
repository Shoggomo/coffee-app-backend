import { Repository } from 'typeorm';
import { UserEntity } from '../entities';
import { CustomRepository } from '../../typeorm/typeorm-ex.decorator';

@CustomRepository(UserEntity)
export class UserRepository extends Repository<UserEntity> {}
