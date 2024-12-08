import express from 'express'
import { config } from 'dotenv'
import mongoose from 'mongoose'
import authRouter from './routes/auth.route'
import cors from 'cors'

config()
const app = express()
app.use(express.json())
app.use(cors())

app.use('/api/auth/', authRouter)

const startServer = async () =>{
    try{
        await mongoose.connect(process.env.MONGOOSE_URI as string)
        console.log("Connected to database!")

        const portNumber = process.env.PORT || 9001
        app.listen(portNumber, ()=>{
            console.log(`Server is running at port ${portNumber}!`)
        })
    }
    catch(e){
        console.log(e)
    }
}

startServer()
