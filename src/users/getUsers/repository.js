import { ScanCommand } from "@aws-sdk/client-dynamodb";
import { client } from "../../../config/database.config.js";

export class GetUsersRepository {
    async getUsers(params){
        return await client.send(new ScanCommand(params))
    }
}