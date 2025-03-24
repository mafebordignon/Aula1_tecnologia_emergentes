import mongoose  from "mongoose";

const userSchema = new mongoose.Schema({
    name: { type: String, require: true} ,
    email: { type: String, require: true, unique: true, min: 2, max: 60 },
    password: { type: String, require: true},
}, {
    versionKey: false,
    timestamps: true,
});

const User = mongoose.model ("User", userSchema);

export default User;