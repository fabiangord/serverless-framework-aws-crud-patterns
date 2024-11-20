import { DeleteItemCommand} from "@aws-sdk/client-dynamodb";
import { client } from '../../../config/database.config.js'

export class DeleteUserRepository {
    async deleteUser(params) {
        return await client.send(new DeleteItemCommand(params))
    }
}