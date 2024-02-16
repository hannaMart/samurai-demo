import express, {Request, Response} from 'express'
const app = express()
const port = process.env.PORT || 3000;

let products = [{title: "Jelly"},{title: "Grind"},{title: "Nook"}]

app.get('/', (req: Request, res: Response) => {
  let startMessage = 'Hello Hania- oopsy, Hania! you did IT ))!'
  res.send(startMessage)
})
app.get('/products', (req: Request, res: Response) => {
  res.send(products)
})
app.get('/products/:productName', (req: Request, res: Response) => {
  let product = products.find(p => p.title === req.params.productName)
  res.send(product)
})

app.listen(port,  () => {
  console.log(`Example app listening on port ${port}`)
})