import {CreateOrUpdateRepository} from '../repository/createOrUpdate.js'

export class ServiceCreateOrUpdate {

    constructor(){
        this.repository = new CreateOrUpdateRepository()
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
}