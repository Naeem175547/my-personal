import mongoose from 'mongoose';
import mongoosePaginate from 'mongoose-paginate-v2'

const newsSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
    trim: true
  },
  content: {
    type: String,
    required: true
  },
  category: {
    type: mongoose.Schema.Types.ObjectId,
    ref:'Category',
    required: true,
    trim: true,
    
  },
  author: {
    type: mongoose.Schema.Types.ObjectId,
    ref:'User',
    required: true,
    trim: true
  },
  image: {
    type: String,
    trim: true
  },
  date: {
    type: Date,
    default: Date.now
  }
});

newsSchema.plugin(mongoosePaginate);
const News =
    mongoose.models.News ||
    mongoose.model('News', newsSchema);

export default News;
