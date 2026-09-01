import mongoose from 'mongoose';
import slugify from 'slugify';

const CategorySchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
      unique:true
    },
    description: {
      type: String,
      
    },
    slug: {
      type: String,
      required: true,
      unique: true,
      
    },
  },
  {
    timestamps:true
  }
);



CategorySchema.pre('validate', async function () {
    if (this.name) {
        this.slug = slugify(this.name, {
            lower: true,
            strict: true
        });
    }
});

const Category =
    mongoose.models.Category ||
    mongoose.model('Category', CategorySchema);

export default Category;
