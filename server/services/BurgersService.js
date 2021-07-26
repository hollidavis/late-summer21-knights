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

  delete(id) {
    const index = fakeDb.burgers.findIndex(b => b.id.toString() === id)
    if (index > -1) {
      throw new BadRequest('Invalid Id')
    }
    fakeDb.burgers.splice(index, 1)
  }
}

export const burgersService = new BurgersService()
