// console.log("my name is ghufran")


import express from 'express'


const app = express()
const PORT = process.env.PORT || 3001

app.get('/', (req, res) => {
    console.log('Hello World! ' + new Date())
  res.send('Hello World! ' + new Date())
})

app.listen(PORT, () => {
  console.log(`Example app listening on PORT ${PORT}`)
})