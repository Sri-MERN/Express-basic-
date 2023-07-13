// const express = require('express')
// const app = express()
// app.use(express.json())

// app.get('/',(req,res)=>{
//     res.send('<h1>welcome to express </h1>')
// })
// app.post ('/users', ( req, res)=>{
//     console.log (req.body)
//     res.send({
//     message: "Data Saved Successfully"
//     })
// })
// app.listen(8000,()=>console.log("app running in port 8000"))

const express = require('express')
const app = express()
const indexRouter = require('./routes/index')
const userouter = require('./routes/users')
const dashboardrouter = require('./routes/dashboard')

app.use(express.json())
app.use('/',indexRouter)
app.use('/users',userouter)
app.use('/dashboard',dashboardrouter)


app.listen(8000,()=>('app running in port 8000'))