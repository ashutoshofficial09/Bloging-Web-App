const mongoose = require("mongoose");

const uri = "mongodb+srv://ashutosh:Ashu7052@cluster0.7h1ee.mongodb.net/myFirstDatabase?retryWrites=true&w=majority";

mongoose
.connect(uri)
.then(() => {
    console.log("database conected");
})
.catch((err) => {
    console.log(err);
});

module.exports = mongoose;