import { fakeDb } from '../db/fakeDb'
import { BadRequest } from '../utils/Errors'

class BurgersService {

  getAll() {
    return fakeDb.burgers
  }

  create(body) {
    fakeDb.burgers.push(body)
    return (body)
  }
}

export const burgersService = new BurgersService()