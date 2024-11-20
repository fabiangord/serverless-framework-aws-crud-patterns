import { GetUsersRepository } from "./repository.js"

export class GetUsersServices {

    constructor(){
        this.repository = new GetUsersRepository()
    }

    async getUsers(){
        const params = {
            TableName:"usersTable"
        }
        return await this.repository.getUsers(params)
    }
}