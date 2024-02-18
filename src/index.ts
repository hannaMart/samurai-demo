import express, {Request, Response} from 'express'
const app = express()
const port = process.env.PORT || 3000;

const products = [{title: 'jelly'}, {title: 'grind'}, {title: 'Nook'}]
const addresses = [{id: 1, status: 'real'}, {id: 2, status: 'real'}, {id: 3, status: 'real'}]

app.get('/', (req: Request, res: Response) => {
  let startMessage = 'Hello, Hania- oopsy, Hania! you did IT ))!'
  res.send(startMessage)
})
app.get('/products', (req: Request, res: Response) => {
  if(req.query.title){
    const stringFound = req.query.title.toString()
    res.send(products.filter(p => p.title.indexOf(stringFound) >-1 ))
  } else{
    res.send(products)
  }
})
app.get('/addresses', (req, res) => {

  res.send(addresses);
});
app.get('/products/:productTitle', (req: Request, res: Response) => {
  const productTitle = req.params.productTitle.toLowerCase()
  let product = products.find(p => p.title.toLowerCase() === productTitle)
  if(product)
  res.send(product) 
else res.send(404)
})

app.get('/addresses/:id', (req: Request, res: Response) => { 
  let address = addresses.find(p => p.id === +req.params.id)
  if(address)
  res.send(address) 
else res.send(404)
})
app.delete('/addresses/:id', (req, res) => {
  let address = addresses.find(p => p.id === +req.params.id);
  if (address)
      res.send(address);
  else
      res.send(404);
});

app.listen(port,  () => {
  console.log(`Example app listening on port ${port}`)
})