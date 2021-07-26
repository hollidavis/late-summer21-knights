import { valuesService } from '../services/ValueService'
import BaseController from '../utils/BaseController'

// NOTE the name !!!MUST!!! match the filename
export class ValuesController extends BaseController {
  constructor() {
    // NOTE The string within super is the name on the door, or this constrollers
    // mount path
    super('api/values')
    this.router
      // NOTE inner doors after the mount path
      // starting with the request type, then the extension path, then the method to run
      .get('', this.getAll)
      .post('', this.create)
  }

  /**
   * Sends found values to a client by request
   * @param {import("express").Request} req
   * @param {import("express").Response} res
   * @param {import("express").NextFunction} next
   */
  async getAll(req, res, next) {
    // NOTE req = Request (aka the knight)
    // res = Response (aka the portal you return the knight through)
    // next = Next (send the knight back into the request hall)
    try {
      const values = await valuesService.find()
      return res.send(values)
    } catch (error) {
      next(error)
    }
  }

  /**
   * Creates a value from request body and returns it
   * @param {import("express").Request} req
   * @param {import("express").Response} res
   * @param {import("express").NextFunction} next
   */
  async create(req, res, next) {
    try {
      const value = await valuesService.create(req.body)
      res.send(value)
    } catch (error) {
      next(error)
    }
  }
}
