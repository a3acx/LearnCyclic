const express = require('express')
const app = express()
const port = 3000

app.get('/', (req, res) => {
  res.status(418).send("sathy")
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})