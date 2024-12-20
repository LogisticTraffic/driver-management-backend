import { Body, Controller, Post } from '@nestjs/common';
import { AuthentService } from './authent.service';

@Controller('authent')
export class AuthentController {

    constructor(private readonly authentservices: AuthentService) {}

    @Post("/adduser")
    addUdser(@Body() body: { username:string, password:string}): string{
           return this.authentservices.addUser(body.username,body.password);
    }


    @Post("/login")
    postLogin(@Body() body: { username:string, password:string}): string
    {
         return this.authentservices.login(body.username,body.password);
    }


}
