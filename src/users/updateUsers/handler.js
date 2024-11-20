import { UpdateService } from './service.js'

class UpdateUserHandler {
  constructor(){
    this.service = new UpdateService()
    this.updateUserHandle = this.updateUsers.bind(this)
  }

  async updateUsers(event) {
    try { 
      const { id } = event.pathParameters
      const body = JSON.parse(event.body)
      const userUpdated = await this.service.updateUser(body, id)
      return {
        statusCode: 200,
        body: JSON.stringify({
          user: {
            userUpdated
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

export const updateUsersHandler = new UpdateUserHandler().updateUserHandle



