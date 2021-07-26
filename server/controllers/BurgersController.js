import { burgersService } from '../services/BurgersService'
import BaseController from '../utils/BaseController'

export class BurgersController extends BaseController {
  constructor() {
    super('api/burgers')
    this.router
      .get('', this.getAll)
      .post('', this.create)
      .delete('/:id', this.delete)
      .put('/:id', this.edit)
      .get('/:id', this.getById)
  }

  getAll(req, res, next) {
    try {
      const burgers = burgersService.getAll()
      res.send(burgers)
    } catch (error) {
      next(error)
    }
  }

  create(req, res, next) {
    try {
      const burgers = burgersService.create(req.body)
      res.send(burgers)
    } catch (error) {
      next(error)
    }
  }

  delete(req, res, next) {
    try {
      burgersService.delete(req.params.id)
      res.send('deleted')
    } catch (error) {
      next(error)
    }
  }

  edit(req, res, next) {
    try {
      req.body.id = req.params.id
      const burgers = burgersService.edit(req.body)
      res.send(burgers)
    } catch (error) {
      next(error)
    }
  }

  getById(req, res, next) {
    try {
      const burgers = burgersService.getById(req.params.id)
      res.send(burgers)
    } catch (error) {
      next(error)
    }
  }
}
