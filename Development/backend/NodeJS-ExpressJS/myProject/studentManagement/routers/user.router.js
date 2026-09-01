import express from 'express';
import User from '../models/user.modal.js';
import bcrypt from 'bcryptjs'
import jwt from 'jsonwebtoken'
import dotenv from 'dotenv'
dotenv.config()
const router = express.Router();

router.post('/register', async (req, res) => {
    try {
        const { username, email, password } = req.body;
        const userExists = await User.exists({username});
        if(userExists){
            res.status(400).json({message:"user already exists"})
            return;
        }
        const hashedPassword = await bcrypt.hash(password, 10);
        const user = new User({
            username,
            email,
            password: hashedPassword
        });

        const result = await user.save();
        res.status(201).json({
            message: "User registered successfully",
            user: result
        });

    } catch (err) {
        res.status(500).json({ message: err.message });
    }
});

router.post('/login', async (req, res) => {
    try {
        const { username, email, password } = req.body;
        const user = await User.findOne({ username, email });
        if (!user) {
            return res.status(404).json({ message: "User not found" });
        }

        const isMatch = await bcrypt.compare(password, user.password);
        if (!isMatch) {
            return res.status(400).json({ message: "Invalid Password" });
        }

        const token = jwt.sign(
            { id: user._id, username: user.username },
            process.env.secretKey,
            { expiresIn: '1h' }
        );

        res.json({ token });

    } catch (err) {
        res.status(500).json({ message: err.message });
    }
});

router.post('/logout',(req,res)=>{
    res.json({message:'Loggedout successfully..'})
})

export default router;