import { Controller, Get } from '@nestjs/common';
import { AuthService } from './auth.service';

@Controller('auth')
export class AuthController {

    constructor(private readonly authService: AuthService) {}
    
    @Get('generate')
    generate(){
        return this.authService.generate()
    }
    
}
