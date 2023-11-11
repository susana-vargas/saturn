import { IsNotEmpty, IsNumber, IsString } from "class-validator"

export class CreateUserDto {

  @IsNumber()
  @IsNotEmpty()
  age: number

  @IsString()
  @IsNotEmpty()
  name: string

  @IsString()
  @IsNotEmpty()
  lastName: string

  @IsNumber()
  @IsNotEmpty()
  phone: number 
}