import mongoose from 'mongoose'
import User from "../../../server/dbs/models/users";
const Schema = mongoose.Schema;
const UserSchema = new Schema({
  username: {
    type: String,
    unique: true,
    require: true
  },
  password: {
    type: String,
    require: true
  },
  email: {
    type: String,
    require: true
  }
});


export default mongoose.model('User',UserSchema)
