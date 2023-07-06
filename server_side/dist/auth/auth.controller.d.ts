import { AuthService } from './auth.service';
export declare class AuthController {
    private readonly authService;
    constructor(authService: AuthService);
    signIn(email: string, password: string): Promise<{
        error: string;
        token?: undefined;
    } | {
        token: string;
        error?: undefined;
    }>;
    logout(authorization: string): Promise<void>;
}
