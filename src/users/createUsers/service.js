import { ServiceCreateOrUpdate } from "../shared/services/createOrUpdate.js"

export class CreateService {

    constructor(){
        this.service = new ServiceCreateOrUpdate()
    }

    async createUser(body){ 
        return await this.service.createUsersOrUpdate(body)
    }
}