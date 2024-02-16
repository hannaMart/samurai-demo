import express, {Request, Response} from 'express'
const app = express()
const port = process.env.PORT || 3000;

const products = [{title: 'jelly'}, {title: 'grind'}, {title: 'nook'}]

app.get('/', (req: Request, res: Response) => {
  let startMessage = 'Hello Hania- oopsy, Hania! you did IT ))!'
  res.send(startMessage)
})
app.get('/products', (req: Request, res: Response) => {
  res.send(products)
})
app.get('/products/nook', (req: Request, res: Response) => {
  let product = products.find(p => p.title === "nook")
  res.send(product)
})

app.listen(port,  () => {
  console.log(`Example app listening on port ${port}`)
})