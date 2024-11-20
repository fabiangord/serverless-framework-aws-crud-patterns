import { GetUserRepository } from "./repository.js"

export class GetUserServices {

    constructor(){
        this.repository = new GetUserRepository()
    }

    async get(id){
        const params = {
            TableName: "usersTable",
            Key: {
                pk: {
                    S: id
                }
            }
        }
        return await this.repository.get(params)
    }
}