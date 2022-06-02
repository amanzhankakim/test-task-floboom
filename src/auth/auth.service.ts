
import { Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';

@Injectable()
export class AuthService {
  constructor(
    private jwtService: JwtService
  ) {}

  async generate() {
    const payload = { message: "You are in" };
    return {
      access_token: this.jwtService.sign(payload),
    };
  }
}

