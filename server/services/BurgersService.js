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

  edit(body) {
    let old = this.getById(body.id)
    old = { ...old, ...body }
    this.delete(old.id)
    fakeDb.burgers.push(old)
    return old
  }

  getById(id) {
    const burgers = fakeDb.burgers.find(b => b.id.toString() === id)
    if (!burgers) {
      throw new BadRequest('Invalid Burger ID')
    }
    return (burgers)
  }
}

export const burgersService = new BurgersService()
