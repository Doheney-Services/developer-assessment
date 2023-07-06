import { CreateUserDto } from '../dto/create-user.dto';
import { User } from './user.schema';
import { UsersService } from './user.service';
import { LoginDto } from 'src/dto/login.dto';
export declare class UserController {
    private readonly userService;
    constructor(userService: UsersService);
    createUser(createUserDto: CreateUserDto): Promise<User>;
    loginUser(loginDto: LoginDto): Promise<{
        message: string;
        user: {
            id: any;
            fullname: string;
            email: string;
            token: string;
        };
    }>;
    getUser(userId: string): Promise<User>;
}
