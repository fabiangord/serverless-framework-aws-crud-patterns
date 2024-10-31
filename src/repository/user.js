import { DeleteItemCommand, GetItemCommand, PutItemCommand, ScanCommand } from "@aws-sdk/client-dynamodb";
import { client } from "../../config/database.config.js";

export class UserRepository {
    async get(params){
        return await client.send(new GetItemCommand(params))
    }

    async getUsers(params){
        return await client.send(new ScanCommand(params))
    }

    async createUsersOrUpdate(params) {
        return await client.send(new PutItemCommand(params))
    }

    async deleteUsers(params) {
        return await client.send(new DeleteItemCommand(params))
    }
}