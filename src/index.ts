import express, {Request, Response} from 'express'
const app = express()
const port = process.env.PORT || 3000;

const products = [{title: 'jelly'}, {title: 'grind'}, {title: 'Nook'}]

app.get('/', (req: Request, res: Response) => {
  let startMessage = 'Hello Hania- oopsy, Hania! you did IT ))!'
  res.send(startMessage)
})
app.get('/products', (req: Request, res: Response) => {
  res.send(products)
})
app.get('/products/:productTitle', (req: Request, res: Response) => {
  const productTitle = req.params.productTitle.toLowerCase()
  let product = products.find(p => p.title.toLowerCase() === productTitle)
  res.send(product)
})

app.listen(port,  () => {
  console.log(`Example app listening on port ${port}`)
})