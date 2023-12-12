import express from 'express'
import cors from 'cors'
import mongoose, { Schema} from 'mongoose'

const app = express()
const port = 3000

const productSchema = new Schema({
  title: String,
  note: Number,
  image_url: String,
  value: Number
})

const Product = mongoose.model('Product', productSchema);

app.use(cors())
app.use(express.json())

app.get('/', async (req, res) => {
  const products = await Product.find()
  res.send(products)
})

app.post('/', async (req,res)=>{
  const product =new Product({
    title: req.body.title,
    note: req.body.note,
    image_url: req.body.image_url,
    value: req.body.value,
  })

  await product.save()
  res.send(product)
})

app.listen(port, () => {
  mongoose.connect('mongodb+srv://adrianoalves019:admin@cluster0.xtpr2hu.mongodb.net/?retryWrites=true&w=majority')
  console.log(`Rodando na porta ${port}`)
})

