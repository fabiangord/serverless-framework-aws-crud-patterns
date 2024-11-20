import { DeleteUserService } from "./service.js";

class DeleteUserHandler {
  constructor(){
    this.service = new DeleteUserService()
    this.deleteUserHandle = this.deleteUsers.bind(this)
  }

  async deleteUsers(event) {
    try { 
      const { id } = event.pathParameters
      await this.service.deleteUser(id)
      return {
        statusCode: 200,
        body: JSON.stringify({
          user: id
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

export const deleteUsersHandler = new DeleteUserHandler().deleteUserHandle



