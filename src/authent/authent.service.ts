import { Injectable } from '@nestjs/common';

@Injectable()
export class AuthentService {

    private users = [];

   addUser(username:string, password:string): string{
    this.users.push(username,password);
    console.log(this.users);
    return " user addeded successfuly";
   } 
   
   login(username:string, password:string): string{
      const user = this.users.find(
         (user) => user.username === username && user.password === password
       );
        console.log(username,password);
        console.log(this.users);
        console.log(user);
        console.log("user");
     return user ? 'connexion reussite' : 'failed conx';
   } 

}
