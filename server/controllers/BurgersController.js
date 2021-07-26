import { burgersService } from '../services/BurgersService'
import BaseController from '../utils/BaseController'

export class BurgersController extends BaseController {
  constructor() {
    super('api/burgers')
    this.router
      .get('', this.getAll)
  }

  getAll(req, res, next) {
    try {
      const burgers = burgersService.getAll()
      res.send(burgers)
    } catch (error) {
      next(error)
    }
  }
}