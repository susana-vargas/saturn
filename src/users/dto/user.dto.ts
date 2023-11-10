import { IsInt, IsNotEmpty, IsNumber, IsString } from "class-validator"

export class CreateUserDto {

  id: string

  @IsInt()
  @IsNotEmpty()
  edad: number

  @IsString()
  @IsNotEmpty()
  name: string

  @IsString()
  @IsNotEmpty()
  apellido: string

  @IsInt()
  @IsNotEmpty()
  telefono: number 
}