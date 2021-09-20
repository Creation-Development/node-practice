const express = require('express')
const app = express()
const port = 5000
app.listen(port, () => {
  console.log(`Server listening at http://localhost:${port}`)
})
app.use(express.json())

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.post('/add',(req,res)=>{
 res.send(`Full Name is : ${req.body.name} ${req.body.surname}`)
})