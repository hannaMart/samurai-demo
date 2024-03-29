import express, {Request, Response} from 'express';
import bodyParser from 'body-parser';
export const app = express();
const port = process.env.PORT || 3000;

// Типизируем адреса для практики
type AddrType = {
  id:number,
  status:string
}

const products = [{title: 'jelly'}, {title: 'grind'}, {title: 'Nook'}]
const addresses : AddrType[] = [{id: 1, status: 'real'}, {id: 2, status: 'real'}, {id: 3, status: 'no-real'}]

//Подключаем промежуточный обработчик, готовящий запрос для передачи в удобном виде. Нужно для ПОСТ запросов. Иначе не запостится - a bit different from Dimych's
app.use(bodyParser.json());

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
app.get('/addresses', (req: Request<{}, {}, {}, {status: string}>, res: Response<AddrType[]>) => {
  const foundAddr = addresses
  if(req.query.status){
    foundAddr.filter(a => a.status.indexOf(req.query.status) >-1 )
    res.json([])
  } else res.json(addresses)
})


app.get('/addresses', (req: Request, res: Response ) => {
  res.send(addresses);
});

app.post('/addresses', (req, res) => {
const newAddress = {
  id: +(new Date()),
  status: req.body.status
}
addresses.push(newAddress);
res.status(201).send(newAddress)
});
app.get('/products/:productTitle', (req: Request, res: Response) => {
  const productTitle = req.params.productTitle.toLowerCase()
  let product = products.find(p => p.title.toLowerCase() === productTitle)
  if(product)
  res.send(product) 
else res.send(404)
})
app.delete('/addresses/:id', (req: Request, res: Response) => { 
  for (let i = 0; i<addresses.length; i++){
    if (addresses[i].id === +req.params.id) {
      addresses.splice(i, 1);
      res.send(204);
    return;
  } 
  }
})
app.get('/addresses/:id', (req, res) => {
  let address = addresses.find(p => p.id === +req.params.id);
  if (address)
      res.send(address);
  else
      res.send(404);
});
app.put('/addresses/:id', (req, res) => {
  let address = addresses.find(p => p.id === +req.params.id);
  if (address){
    address.status = req.body.status
    res.send(address);}
  else res.send(404);
});
const server = app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});

// Export the server instance if needed
export { server };