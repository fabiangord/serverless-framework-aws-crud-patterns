import { GetUsersServices } from "./service.js";

class GetUsersHandler {
  constructor(){
    this.service = new GetUsersServices()
    this.getUsersHandle = this.getUsers.bind(this)
  }

  async getUsers() {
    try { 

      const users = await this.service.getUsers()
      return {
        statusCode: 200,
        body: JSON.stringify(users?.Items)
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

export const getUsersHandler = new GetUsersHandler().getUsersHandle




