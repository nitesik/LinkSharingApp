import {
  CanActivate,
  ExecutionContext,
  Injectable,
  UnauthorizedException,
} from '@nestjs/common';
import { GqlExecutionContext } from '@nestjs/graphql';
import { JwtService } from '@nestjs/jwt';

@Injectable()
export class AuthGuard implements CanActivate {
  constructor(private jwtService: JwtService) {}
  async canActivate(context: ExecutionContext): Promise<boolean> {
    const request = GqlExecutionContext.create(context).getContext();

    const token = request.req.cookies.auth ?? '';

    try {
      const payload = await this.jwtService.verifyAsync(token);

      request['user'] = payload;
    } catch (error) {
      console.error(error);

      throw new UnauthorizedException();
    }

    return true;
  }
}
