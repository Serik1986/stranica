
const express = require("express");
 
const app = express();
 
app.use(express.static(__dirname + "/public"));
 
app.use("/", function(request, response){
     
    response.send("index.");
});
 

app.listen(80, '0.0.0.0')
