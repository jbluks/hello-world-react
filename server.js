const express = require('express')
const app = express()
const port = process.env.PORT || 8080

if (process.env.NODE_ENV === 'production') {
  app.use(express.static('build'))
}

app.get('/api/', (req, res) => {
  res.send('Hello World')
})

app.listen(port, () => {
  console.log(`listening on PORT ${port}`)
})