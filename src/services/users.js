import { UserRepository } from "../repository/user.js"
import { randomUUID } from 'node:crypto'

export class UseServices {

    constructor(){
        this.repository = new UserRepository()
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

    async getUsers(){
        const params = {
            TableName:"usersTable"
        }
        return await this.repository.getUsers(params)
    }

    async createUsersOrUpdate(body, id){

        const idRandom = randomUUID()

        const params = {
            Item: {
                pk: {
                    S: id ?? idRandom
                },
                name: {
                    S: body.name
                },
                phone: {
                    S: body.phone
                }
            },
            TableName: "usersTable"
        }

        const userCreated = await this.repository.createUsersOrUpdate(params)
        return {
            userCreated,
            idRandom
        }
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
        console.log(params)

        const userCreated = await this.repository.deleteUsers(params)
        console.log(userCreated)
        return {
            userCreated,
        }
    }

}