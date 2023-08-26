import express from 'express'
import morgan from 'morgan'
import { MongoConection } from '../db/dbconection'

import { TaskRoute } from './task.route'
export class ExpressApp {

  private app = express()
  private PORT: number = Number(process.env.PORT)

  //? Routers
  private taskRoute = new TaskRoute()

  constructor() {
    this.mideelwareInitialized()
    this.routeInizializer()
  }

  private mideelwareInitialized() {
    this.app.use(morgan('dev'))
    this.app.use(express.json())
    this.app.use('/task', this.taskRoute.router())
  }

  private routeInizializer() {
    this.app.get('/', (req, res) => {
      res.json({ msg: 'Hola como andamos' })
    })
  }

  public listen() {
    this.app.listen(this.PORT, () => {
      console.log(`runnin on: http://localhost:${this.PORT}/`)
    })
  }
}