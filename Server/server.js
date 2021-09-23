const express = require('express')
const cors = require('cors')
const app = express()
const port = 5000
app.listen(port, () => {
  console.log(`Server listening at http://localhost:${port}`)
})
app.use(express.json())
app.use(cors())

let arr=[]

app.get('/', (req, res) => {
  res.send(arr)
})

app.post('/user/add',(req,res)=>{
    arr =[...arr,req.body]
    res.send(req.body)
})
app.delete('/user/delete/:id',(req,res)=>{
  console.log(req.params.id);
    var id = req.params.id
    arr.splice(id,1)
    console.log(arr);
})
app.put('/user/update/:id',(req,res)=>{
  console.log(req.params.id);
    var id = req.params.id
    arr.splice(id,1,req.body)
    console.log(arr);
})