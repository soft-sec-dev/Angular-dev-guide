import express from 'express'
import { getAllResources, createTask } from '../controllers/task.controller'


export class TaskRoute{

  private route = express.Router()

  constructor(){
    this.InitializedRoutes()
  } 

  private InitializedRoutes(){
    this.route.get('/', getAllResources)
    this.route.post('/', createTask)
  }

  public router(){
    return this.route
  }
}