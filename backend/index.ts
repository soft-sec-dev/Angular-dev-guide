import dotenv from 'dotenv'
import { ExpressApp } from './src/routes'

dotenv.config()

const app = new ExpressApp()

app.listen()