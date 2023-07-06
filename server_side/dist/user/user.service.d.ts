import { Model } from 'mongoose';
import { CreateUserDto } from 'src/dto/create-user.dto';
import { User, UserDocument } from './user.schema';
import { LoginDto } from 'src/dto/login.dto';
export declare class UsersService {
    private userModel;
    constructor(userModel: Model<UserDocument>);
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
    findUserByEmail(email: string): Promise<User>;
    getUserById(userId: string): Promise<User>;
}
