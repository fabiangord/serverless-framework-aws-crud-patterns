import { PutItemCommand } from '@aws-sdk/client-dynamodb'
import { client } from '../../../../config/database.config.js'

export class CreateOrUpdateRepository {
  async createUsersOrUpdate(params) {
    return await client.send(new PutItemCommand(params))
  }
}