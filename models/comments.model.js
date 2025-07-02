import mongoose from 'mongoose';

const CommentSchema = new mongoose.Schema({
    name: {
        type: String
    },
    message: {
        type: String,
        required: true
    },
    bookId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Book', // reference to Book model
        required: true
    }
    
},
{
    timestamps: true
})

const Comment = mongoose.model('Comment', CommentSchema)
export default Comment