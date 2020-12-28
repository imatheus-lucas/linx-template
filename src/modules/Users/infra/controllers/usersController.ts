import { Request, Response } from "express";


export default new class Users {
      public async index(request: Request, response: Response): Promise<any>{
         return 'hello wolrd'
      }
}