import { Body, Controller, Get, Post, ValidationPipe } from "@nestjs/common";
import { CreateUserDto } from "./dto/user.dto";
import { UserService } from "./user.service";


@Controller('user')
export class UserController {

  constructor(private UserService:UserService){}


  @Post()
  createUser(@Body() newUser: CreateUserDto){
    return this.UserService.createUser(newUser.name, newUser.age, newUser.lastName,  newUser.phone)
  }
  
}