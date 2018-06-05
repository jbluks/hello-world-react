const express = require('express')
const app = express()
const port = process.env.PORT || 8080

if (process.env.NODE_ENV === 'production') {
  app.use(express.static(__dirname + './../build'))
}

app.get('/api', (req, res) => {
  res.send('Hello World')
})

app.get('*', (req, res) => {
  res.sendFile('index.html',{root: __dirname + './../build'})
})


app.listen(port, () => {
  console.log(`listening on PORT ${port}`)
})