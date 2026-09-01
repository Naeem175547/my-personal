import mongoose from "mongoose";

const SettingSchema = new mongoose.Schema({
  website_title: {
    type: String,
    required: true,
    trim: true,
  },
  website_logo: {
    type: String,
   
  },
  footer_description: {
    type: String,
    required: true,
    trim: true,
  },
});


export default mongoose.model('Setting',SettingSchema)