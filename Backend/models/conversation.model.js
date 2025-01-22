import mongoose from "mongoose";
import User from "../models/user.model.js";
import Message from "./message.model.js";

const conversationSchema = new mongoose.Schema(
  {
    members: [
      {
        type: mongoose.Types.ObjectId,
        ref: User,
      },
    ],
    messages: [
      {
        type: mongoose.Types.ObjectId,
        ref: Message,
        default: [],
      },
    ],
  },
  { timestamps: true }
);

const Conversation = mongoose.model("conversation", conversationSchema);
export default Conversation;