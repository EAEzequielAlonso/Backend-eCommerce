import { Module} from "@nestjs/common"; 
import { UsersService } from "./Users.service";
import { UsersController } from "./Users.controller";
import { UsersRepository } from "./User.repository";

@Module ({
    providers: [UsersService, UsersRepository],
    controllers: [UsersController]
})
export class UserModule{

}