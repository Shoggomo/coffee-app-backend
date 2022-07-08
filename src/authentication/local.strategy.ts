import { Strategy } from 'passport-local';
import { PassportStrategy } from '@nestjs/passport';
import { Injectable, UnauthorizedException } from '@nestjs/common';
import { AuthenticationService } from './services';
import { AuthenticationEntity } from './entities';

@Injectable()
export class LocalStrategy extends PassportStrategy(Strategy) {
  constructor(private authService: AuthenticationService) {
    super();
  }

  async validate(
    username: string,
    password: string,
  ): Promise<AuthenticationEntity> {
    const auth = await this.authService.validateUser(username, password);
    if (!auth) {
      throw new UnauthorizedException();
    }
    return auth;
  }
}
