import { Request, Response } from "express"
import User from "../models/user.model"
import bcrypt from 'bcryptjs'

export const signup = async (req:Request, res:Response) => {
    try{
        const { username, email, password } = req.body

        if(!username || !email || !password){
            res.status(400).json({message:"All fields required!!"})
            return
        }

        const existingEmail = await User.findOne({email})
        if(existingEmail){
            res.status(409).json({message:"Email taken!!"})
            return
        }

        const existingUser = await User.findOne({username})
        if(existingUser){
            res.status(409).json({message: "Username taken!!"})
            return
        }
        
        const salt = await bcrypt.genSalt(10)
        const hashedPassword = await bcrypt.hash(password, salt)
        const newUser = new User({ username, email, password: hashedPassword })
        await newUser.save()

        res
        .status(201)
        .json({message: 'User created successfully!!'})    
    }
    catch(e){
        console.log(e)
        res.status(500).json({message:"Internal server error!!"})
    }
}