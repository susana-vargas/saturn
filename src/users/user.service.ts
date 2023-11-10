import { Injectable } from "@nestjs/common";
import { v4 } from 'uuid'

@Injectable()
export class UserService {

  private users = []

  createUser( name: string, edad:number, apellido:string, telefono:number ){
    const user = {
      id: v4(),
      edad,
      name,
      apellido,
      telefono,
    };
    this.users.push(user)
    console.log(this.users)
  }
}