import { GetUserServices } from "./service.js";

class GetUserHandler {
  constructor(){
    this.service = new GetUserServices()
    this.getUserHandle = this.get.bind(this)
  }

  async get(event) {
    try {
      const { id } = event.pathParameters 
      const user = await this.service.get(id)
      return {
        statusCode: 200,
        body: JSON.stringify(user?.Item)
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

export const getUserHandler = new GetUserHandler().getUserHandle



