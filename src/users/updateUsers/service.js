import { ServiceCreateOrUpdate } from "../shared/services/createOrUpdate.js"

export class UpdateService {

    constructor(){
        this.service = new ServiceCreateOrUpdate()
    }

    async updateUser(body){ 
        return await this.service.createUsersOrUpdate(body)
    }
}