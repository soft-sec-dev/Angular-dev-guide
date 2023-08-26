import { MongoClient, ServerApiVersion } from "mongodb";

export class MongoConection{
  private URI = process.env.DB_URI as string
  public client = new MongoClient('mongodb+srv://jordanhuaman:ty0lTnHqiRkQtYIV@cluster0.argvt6o.mongodb.net/?retryWrites=true&w=majority')


  private async run(){
    try {
      await this.client.connect()
      console.log('Db Conected suscesfully')
    } catch (error) {
      await this.client.close()
      process.exit(1)
    }

  }

  public clientAdapter(){
    return this.client
  }

  public async main(){
    await this.run()
  }
}