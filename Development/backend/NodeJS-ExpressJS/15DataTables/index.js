
import express from 'express'
import mongoose from 'mongoose';
import cors from 'cors'
import User from './model/user.model.js';

const app = express();
app.use(cors());
app.use(express.json());
app.use(express.static('public'));

// Connect MongoDB
mongoose.connect('mongodb://localhost:27017/school')
.then(() => console.log('Database Connected!'));

// Get all users
app.get('/api/users', async (req, res) => {
  const users = await User.find();
  res.json({ data: users });
});

app.listen(3000, () => console.log('Server started'));