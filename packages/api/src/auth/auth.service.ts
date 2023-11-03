import { Injectable } from '@nestjs/common';
import { Token } from './model/Token.model';
import { PrismaService } from 'src/prisma/prisma.service';
import * as argon from 'argon2';
import { v4 as uuidv4 } from 'uuid';
import { JwtService } from '@nestjs/jwt';

@Injectable()
export class AuthService {
  constructor(
    private prisma: PrismaService,
    private jwtService: JwtService,
  ) {}
  async login(email: string, password: string): Promise<Token> {
    const user = await this.prisma.user.findFirst({
      where: {
        email,
      },
    });

    if (!user) throw new Error('Email not found');

    const isVerified = argon.verify(user.hashed, password);

    if (!isVerified) throw new Error('Wrong Password');

    const token = await this.issueToken(user.ID, user.email);

    return { token };
  }

  async signup(email: string, password: string): Promise<Token> {
    try {
      const user = await this.prisma.user.create({
        data: {
          email,
          ID: uuidv4(),
          hashed: await argon.hash(password),
        },
      });

      const token = await this.issueToken(user.ID, user.email);

      return { token };
    } catch {
      throw new Error('Email already exists');
    }
  }

  async issueToken(id: string, email: string) {
    const payload = {
      sub: id,
      email,
    };

    return await this.jwtService.signAsync(payload);
  }
}
