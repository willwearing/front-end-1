const express = require('express')
const uuid = require('uuid').v4
const cors = require('cors')
const app = express()

const port = process.env.PORT || 3333

app.use(express.json())
app.use(cors())

const items = [
  {
    id: uuid(),
    item_name: 'African Rug',
    item_price: 200,
    item_description: 'Beautiful hand made rug.',
    item_location: 'Facebook marketplace.',
  },
  {
    id: uuid(),
    item_name: 'Moroccan Rug',
    item_price: 350,
    item_description: 'Stunning Moroccan rug.  Size is 5x8 feet. ',
    item_location: 'ebay',
  },
]

app.get('/:id', (req, res) => {
  const item = items.find(it => it.id === req.params.id)
  if (!item) {
    res.status(404).json({ message: 'No such item!' })
  }
  else {
    res.json(item)
  }
})

app.get('/', (req, res) => {
  res.json(items)
})

app.post('/', (req, res) => {
  const { item_name, item_price, item_description, item_location } = req.body
  const requiredFields = { item_name, item_price, item_description, item_location }

  if (Object.values(requiredFields).some(field => (!field || !field.trim()))) {
    res.status(400).json({ message: 'Some required fields are missing or invalid.' })
  }
  else {
    const newItem = { id: uuid(), ...req.body }
    items.push(newItem)
    res.status(200).json(newItem)
  }
})

app.listen(port, () => {
  console.log(`listening on ${port}`)
})
