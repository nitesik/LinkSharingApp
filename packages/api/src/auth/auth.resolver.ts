// eslint-disable-next-line @typescript-eslint/no-unused-vars
import { UseGuards } from '@nestjs/common';
import { Args, Context, Mutation, Query, Resolver } from '@nestjs/graphql';
import { Token } from './model/Token.model';
import { AuthService } from './auth.service';
import { UserAuthInput } from './dto/user-auth.input';
import { Response } from 'express';
import { AuthGuard } from './auth.guard';

@Resolver()
export class AuthResolver {
  constructor(private readonly authService: AuthService) {}

  @UseGuards(AuthGuard)
  @Query(() => Token)
  async test() {
    return { token: '3243242' };
  }

  @Mutation(() => Token)
  async login(
    @Args('userAuthInput') userAuthInput: UserAuthInput,
    @Context() { res, req }: { res: Response; req: Request },
  ): Promise<Token> {
    const token = await this.authService.login(
      userAuthInput.email,
      userAuthInput.password,
    );

    if (token)
      res.cookie('auth', `Bearer ${token}`, {
        expires: new Date(Date.now() + 90000),
        httpOnly: false,
      });

    console.log(req);

    return token;
  }

  @Mutation(() => Token)
  async signup(
    @Args('userAuthInput') userAuthInput: UserAuthInput,
    @Context() { res }: { res: Response },
  ): Promise<Token> {
    const token = this.authService.signup(
      userAuthInput.email,
      userAuthInput.password,
    );

    if (token)
      res.cookie('auth', `Bearer ${token}`, {
        expires: new Date(Date.now() + 90000),
        httpOnly: false,
      });
    return token;
  }
}
