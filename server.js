const express = require('express');
const app = express();
app.use(express.static(__dirname + '/public/dist/public'));
const bodyParser = require('body-parser');
app.use(bodyParser.json());
const path = require('path');

app.all("*", (req,res,next) => {
    res.sendFile(path.resolve("./public/dist/public/index.html"))
});

app.listen(4200, function() {
    console.log("Listening on port 4200...");
})