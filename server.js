const express = require('express')
const cors = require('cors')
const uuid = require('uuid').v4

const app = express()
app.use(express.json())
app.use(cors())

let items = [
  {
    id: uuid(),
    item_name: 'African Rug',
    item_description: 'Beatiful hand made rug',
    item_price: 200,
    item_location: 'facebook marketplace'
  },
]

function getAllQuotes(req, res) {
  res.json(items)
}

function getQuoteById(req, res) {
  res.json(items.find(item => item.id === req.params.id))
}

function postNewQuote(req, res) {
  const item = { id: uuid(), ...req.body }
  items.push(item)
  res.json(item)
}

function deleteQuoteById(req, res) {
  items = items.filter(item => item.id !== req.params.id)
  res.json(req.params.id)
}

function replaceQuoteById(req, res) {
  const { id } = req.params
  const updatedItem = { id, ...req.body }
  items = items.map(i => {
    if (i.id === id) {
      return updatedItem
    }
    return i
  })
  res.json(updatedItem)
}

////////////// ENDPOINTS //////////////
////////////// ENDPOINTS //////////////
////////////// ENDPOINTS //////////////
app.get('/items', getAllQuotes)
app.get('/items/:id', getQuoteById)
app.post('/items', postNewQuote)
app.delete('/items/:id', deleteQuoteById)
app.put('/items/:id', replaceQuoteById)

app.listen(3333, () => console.log(
  'items server listening on port 3333!',
))
