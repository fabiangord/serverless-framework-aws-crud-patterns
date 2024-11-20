import { GetItemCommand } from "@aws-sdk/client-dynamodb";
import { client } from "../../../config/database.config.js";

export class GetUserRepository {
    async get(params){
        return await client.send(new GetItemCommand(params))
    }
}