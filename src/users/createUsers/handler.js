import { CreateService } from './service.js'

class CreateUserHandler {
  constructor(){
    this.service = new CreateService()
    this.createUserHandle = this.createUsers.bind(this)
  }

  async createUsers(event) {
    try { 
      const body = JSON.parse(event.body)
      const userCreated = await this.service.createUser(body)
      return {
        statusCode: 200,
        body: JSON.stringify({
          user: {
            body,
            id: userCreated.idRandom
          }
        })
      }

    } catch (error) {
      return {
        statusCode: 400,
        body: JSON.stringify({
          error: `error: ${error}`
        })
      }
    }
  }
}

export const createUsersHandler = new CreateUserHandler().createUserHandle



