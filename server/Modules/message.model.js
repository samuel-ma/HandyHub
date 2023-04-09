
import mongoose from "mongoose";
const {Schema} = mongoose;

const MessageSchema = new Schema({
    ConversationId: {
        type: String,
        required: true,
    },

    userId: {
        type: String,
        required: true,
    },

    desc: {
        type: String,
        required: true,
    },


}, {
    timeStamps: true,
})

export default mongoose.model("Message", MessageSchema);