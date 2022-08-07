const express = require('express');
const path = require('path');
const fs = require('fs');
var cors = require('cors')
const app = express();

app.use(express.json());
app.use(cors());


app.use((req, res, next) =>{
	// console.log("hmmm");
	fs.appendFile("request.log", `${req.method} ${req.url} ${new Date().toString()}\n`, (err) => {
		if(err){
			console.log("couldnt write to file");
		}
	});
	next();
});



app.use(express.static(path.join(__dirname, 'build')));
app.get("/getshop",(req, res)=>{
res.send("Hello")
})
app.get('*', function (req, res) {
  res.sendFile(path.join(__dirname, 'build', 'index.html'));
});
var port = process.env.PORT || 9005
app.listen(port, ()=>{
	console.log("server is running" + port);
});