const express=require('express')
const userRouter=require('./routes/users')
const cors=require('cors')


const app=express();


app.use(cors())
app.use(express.json())
app.use(userRouter)


app.listen(8000,()=>{
    console.log('Server is live..')
})
