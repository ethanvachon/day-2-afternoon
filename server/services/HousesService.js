import { dbContext } from "../db/DbContext"
import { BadRequest } from "../utils/Errors"

class HousesService {
  async getAll(query = {}) {
    return await dbContext.Houses.find(query)
  }
  async create(data) {
    return await dbContext.Houses.create(data)
  }
  async getOne(id) {
    let house = await dbContext.Houses.findById(id)
    if (!house) {
      throw new BadRequest("not a valid id")
    }
    return house
  }
  async edit(id, body) {
    let house = await dbContext.Houses.findByIdAndUpdate(id, body, { new: true })
    if (!house) {
      throw new BadRequest("invalid id")
    }
    return house
  }
  async delete(id) {
    let house = await dbContext.Houses.findByIdAndDelete(id)
    if (!house) {
      throw new BadRequest("invalid id")
    }
    return "deleted"
  }
}


export const housesService = new HousesService()