const express = require('express')
const cors = require('cors')
const app = express()
const port = 5000
app.listen(port, () => {
  console.log(`Server listening at http://localhost:${port}`)
})
app.use(express.json())
app.use(cors())

let arr = []

app.get('/', (req, res) => {
  res.send(arr)
})






app.post('/user/add', (req, res) => {
  var emaildata = []
  arr.map((item) => (emaildata.push(item.email)))
  if (!(/^[a-zA-Z0-9]+@[a-zA-Z0-9.-]+.[a-zA-Z]$/).test(req.body.email)) {
    console.log("email is not valid...!!")
  }
  else if (!(/[a-zA-Z]{5}/).test(req.body.name)) {
    console.log("Name is not valid...!!")
  }
  else if (emaildata.includes(req.body.email)) {
    console.log("email is already exist..!!")
  }
  else if (!(/[0-9]{10}/).test(req.body.phone)) {
    console.log(" mobile number is invalid")
  }
  else if (!(/[a-zA-Z0-9]{8}/).test(req.body.pass)) {
    console.log("Password must be more then or equal to 8 character")
  }
  else{
  arr = [...arr, req.body]
  res.send(req.body)
  }
})





app.delete('/user/delete/:id', (req, res) => {
  console.log(req.params.id);
  var id = req.params.id
  arr.splice(id, 1)
  console.log(arr);
})










app.put('/user/update/:id', (req, res) => {
  console.log(req.params.id);
  var id = req.params.id
  arr.splice(id, 1, req.body)
  console.log(arr);
})