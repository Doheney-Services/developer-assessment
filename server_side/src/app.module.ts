import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { UsersModule } from './user/user.module';
import { AuthModule } from './auth/auth.module';
import {  UserSchema } from './user/user.schema';
import { UsersService } from './user/user.service';
import { JwtAuthGuard } from './auth/jwt-auth.guard';
import { AppService } from './app.service';
import { UserController } from './user/user.controller';


@Module({
  imports: [
    MongooseModule.forRoot('mongodb://localhost:27017/dev-task'),
    MongooseModule.forFeature([{ name: 'User', schema: UserSchema }]),
    UsersModule,
    
    
  ],
  providers: [AppService, AuthModule, UsersService, JwtAuthGuard],
  controllers: [UserController],
})


export class AppModule {}
