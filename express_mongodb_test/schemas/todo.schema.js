import mongoose from 'mongoose'

const TodoSchema = new mongoose.Schema({
    value:{
        type: String,
        required: true,
    },
    order:{
        type: Number,
        required: false,
    },
    doneAt:{
        type: Date,
        required: false,
    },
    done:{
        type: Boolean,
        required: false,
    }
})


TodoSchema.virtual('todoId').get(function () {
    return this._id.toHexString();
  });
  TodoSchema.set('toJSON', {
    virtuals: true,
  });

export default mongoose.model('Todo',TodoSchema)


