const express = require ('express')
const router = express.Router()

const users = [{
   name:"tenhead",
   mail:"head@gmail.com",
   password:"admin@123",
   role:"student"
},
   {
       name:"sri",
       mail:"sri@gmail.com",
       password:"admin@123",
       role:"student"
   },
   {
      name:"benzi",
      mail:"ben@gmail.com",
      password:"admin@123",
      role:"student"
   },
   {
      name:"natasha",
      mail:"natasha@gmail.com",
      password:"admin@123",
      role:"student"
   },
   {
      name:"angela",
      mail:"angela@gmail.com",
      password:"admin@123",
      role:"student"
   }

]

router.get('/',(req,res)=>{
   res
   .status(200)
   .send({
       message:"Data Fetched Successfully",
       data:users
   })
})

// router.get('/:id',(req,res)=>{
//    if (Number (req.params.id)<users.length) {
//    res
//    .status(200)
//    .send({
//       message:"user data fetched sucessfully",
//      data:users[req.params.id]
//    })
// }
//    else
//    {
//       res
//       .status(400)
//       .send({
//          message:'user not found'
//       })
//    }
// })

// router.post('/',(req,res)=>{
//    users.push(req.body)
//    res
//    .status(200)
//    .send({
//       message:"user saved success"
//    })
// })
module.exports= router