import mongoose from 'mongoose';
import { Schema } from 'mongoose';

mongoose.connect("mongodb://127.0.0.1:27017/relationDemo")
.then(() => console.log("connected to db"))
.catch(() => console.log("not connected to db"));

const userSchema = new Schema({
    username: String,
    addresses: [
        {
            location: String,
            city: String
        }
    ]
});

const User = mongoose.model('User', userSchema);

const addUsers = async () => {

    let user1 = new User({
        username: "sherlockholmes",
        addresses: [
            {
                location: "221B Baker Street",
                city: "London"
            }
        ]
    });

    user1.addresses.push({
        location: "32 Wall Street",
        city: "London"
    });

    let result = await user1.save();
    console.log(result);
};

addUsers();