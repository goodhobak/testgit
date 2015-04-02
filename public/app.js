var express=require('express');
var app = express.createServer();
app.get('/',function(req,res) {
	res.send("hello node.js");
});

app.listen(process.env.PORT);
console.log("Webserver Started on http://localhost:process.env.PORT: " + process.env.PORT);
