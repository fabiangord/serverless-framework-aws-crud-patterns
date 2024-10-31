import { UseServices } from "../services/users.js";

class UserHandler {
  constructor(){
    this.service = new UseServices()
    this.getUserHandle = this.get.bind(this)
    this.getUsersHandle = this.getUsers.bind(this)
    this.createUserHandle = this.createUsers.bind(this)
    this.updateUserHandle = this.updateUsers.bind(this)
    this.deleteUserHandle = this.deleteUsers.bind(this)
  }

  async get(event) {
    try {
      const { id } = event.pathParameters 
      const user = await this.service.get(id)
      console.log(user)
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

  async createUsers(event) {
    try { 
      const body = JSON.parse(event.body)
      const userCreated = await this.service.createUsersOrUpdate(body)
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

  async updateUsers(event) {
    try { 
      const { id } = event.pathParameters
      const body = JSON.parse(event.body)
      await this.service.createUsersOrUpdate(body, id)
      return {
        statusCode: 200,
        body: JSON.stringify({
          user: body
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

export const getUserHandler = new UserHandler().getUserHandle
export const getUsersHandler = new UserHandler().getUsersHandle
export const createUsersHandler = new UserHandler().createUserHandle
export const updateUsersHandler = new UserHandler().updateUserHandle
export const deleteUsersHandler = new UserHandler().deleteUserHandle



