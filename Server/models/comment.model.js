import { Schema } from "mongoose";
import mongoose from "mongoose";

const commentSchema = new Schema({
    // we need to import the user schema
    user: {
        type: Schema.Types.ObjectId,
        ref: "User",
        required: true
    },
    
    //We need to reference the post this comment belongs to
    post: {
        type: Schema.Types.ObjectId,
        ref: "Post",
        required: true
    },

    //the description of the comment
    desc: {
        type: String,
        required: true,
    },

}, { timestamps: true });

export default mongoose.model("Comment", commentSchema);
export { commentSchema };