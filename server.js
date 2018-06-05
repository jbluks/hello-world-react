const express = require('express')
const app = express()
const port = process.env.PORT || 8080

if (process.env.NODE_ENV === 'production') {
  app.use(express.static(__dirname + '/build'))
}

app.get('/api', (req, res) => {
  res.send('Hello World. This is an AWS Demo.')
})

app.get('*', (req, res) => {
  console.log(process.env.NODE_ENV)
  console.log(__dirname + '/build')
  res.sendFile('index.html',{root: __dirname + '/build'})
})


app.listen(port, () => {
  console.log(`listening on PORT ${port}`)
})