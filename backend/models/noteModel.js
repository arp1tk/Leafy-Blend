const mongoose = require("mongoose");

const noteModel = mongoose.Schema({
    title:{
        type: String,
        required: true
    },
    content:{
        type: String,
        required: true
    },
    category:{
        type: String,
        required: true
    },
    user:{
        type:mongoose.Schema.Types.ObjectId,
        required:true,
        ref:"User"
    }
},
{
    timestamps: true
})

const Note = mongoose.model("Note" , noteModel)

module.exports = Note;