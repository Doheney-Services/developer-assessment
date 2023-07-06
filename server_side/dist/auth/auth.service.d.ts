import { UsersService } from '../user/user.service';
import { JwtService } from '@nestjs/jwt';
export declare class AuthService {
    private readonly usersService;
    private readonly jwtService;
    constructor(usersService: UsersService, jwtService: JwtService);
    validateUser(email: string): Promise<any>;
    signIn(email: string, password: string): Promise<string>;
    logout(token: string): Promise<void>;
    private addToTokenBlacklist;
}
