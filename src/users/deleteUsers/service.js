import { DeleteUserRepository } from "./repository.js"

export class DeleteUserService {

    constructor(){
        this.repository = new DeleteUserRepository()
    }

    async deleteUser(id){

        const params = {
            Key: {
                pk: {
                    S: id
                }
            },
            TableName: "usersTable"
        }

        const userCreated = await this.repository.deleteUser(params)
        return {
            userCreated,
        }
    }

}