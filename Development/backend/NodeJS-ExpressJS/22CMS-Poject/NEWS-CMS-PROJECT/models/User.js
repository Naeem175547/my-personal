import mongoose from 'mongoose';
import brypt from 'bcryptjs'

const userSchema = new mongoose.Schema({
  fullname: {
    type: String,
    trim: true,
  },
  username: {
    type: String,
    required: true,
    unique: true,
    trim: true,
  },
  password: {
    type: String,
    required: true,
  },
  role: {
    type: String,
    enum:['author', 'admin'],
    required: true,
    trim: true,
  },

});

userSchema.pre('save', async function (next) {
  if (this.isModified('password')) {
    this.password = await brypt.hash(this.password, 12);
  }
  
});

const User =
    mongoose.models.User ||
    mongoose.model('User', userSchema);

export default User;
