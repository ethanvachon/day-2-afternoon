import { dbContext } from "../db/DbContext"
import { BadRequest } from "../utils/Errors"


class JobsService {
  async getAll(query = {}) {
    return await dbContext.Jobs.find(query)
  }
  async getOne(id) {
    let job = await dbContext.Jobs.findById(id)
    if (!job) {
      throw new BadRequest('no job exists with that id')
    }
    return job
  }
  async create(body) {
    return await dbContext.Jobs.create(body)
  }
  async edit(id, body) {
    let job = await dbContext.Jobs.findByIdAndUpdate(id, body, { new: true })
    if (!job) {
      throw new BadRequest("invalid id")
    }
    return job
  }
  async delete(id) {
    let job = await dbContext.Jobs.findByIdAndDelete(id)
    if (!job) {
      throw new BadRequest("invalid id")
    }
    return "deleted"
  }
}

export const jobsService = new JobsService()
