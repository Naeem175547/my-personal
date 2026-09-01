import mongoose from "mongoose";
import { Schema } from "mongoose";

const userSchema = new Schema(
  {
    username: {
      type: String,
      required: true,
      unique: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
    },
    password: {
      type: String,
      required: true,
    },

    repositories: {
      type: [
        {
          type: Schema.Types.ObjectId,
          ref: "Repository",
        },
      ],
      default: [],
    },

    followedUsers: {
      type: [
        {
          type: Schema.Types.ObjectId,
          ref: "User",
        },
      ],
      default: [],
    },
    starRepos: {
      type: [
        {
          type: Schema.Types.ObjectId,
          ref: "Repository",
        },
      ],
      default: [],
    },
  },
  {
    timestamps: true,
  },
);
const User = mongoose.model("User", userSchema);
export default User;
