import { Module } from '@nestjs/common';
import { AuthResolver } from './auth.resolver';
import { AuthService } from './auth.service';
import { JwtModule } from '@nestjs/jwt';

@Module({
  providers: [AuthResolver, AuthService],
  imports: [
    JwtModule.register({
      global: true,
      privateKey: process.env.SECRET_KEY,
      signOptions: { expiresIn: '30m' },
    }),
  ],
})
export class AuthModule {}
