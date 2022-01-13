import mongoose from "mongoose";
import bcrypt from "bcrypt";
import config from "config";

export interface UserDocument extends mongoose.Document {

}

const UserSchema = new mongoose.Schema(
{}
   
);




const User = mongoose.model<UserDocument>("User", UserSchema);

export default User;
