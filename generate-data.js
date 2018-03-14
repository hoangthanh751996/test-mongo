const mongoose = require("mongoose");
const Note = mongoose.model("Note");
module.exports = () => {

    const N = 1000000;
    const input = "QWERTYUIOPASDFGHJKLZXCVBNMqwertyuioopasdfghjklzxcvbnm123456789000";
    let crypto = require('crypto');
    let promises = [];
    for(let i = 0; i < N; i++) {
        let hash = crypto.createHash('sha256').update(input).digest('base64');
        let noteModel = new Note({content: hash});
        console.log(noteModel);
        noteModel.save();
    }
    // return Promise.all(promises);
};