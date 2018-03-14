"use strict";

const mongoose = require("mongoose");
const Schema = mongoose.Schema;

let NoteSchema = new Schema({
    content: {
        type: String
    }
});

let Note = mongoose.model("Note", NoteSchema);
module.exports = Note;
