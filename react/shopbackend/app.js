const express = require("express");
const bodyParser = require("body-parser");

let app = express();

app.use(bodyParser.json());

//database
let database = [];
let id = 100

app.get("/api/shopping", function(req,res) {
	res.status(200).json(database);
});

app.post("/api/shopping", function(req,res) {
	let item = {
		id:id,
		type:req.body.type,
		price:req.body.price,
		count:req.body.count
	}
	id++;
	database.push(item);
	res.status(200).json({"message":"success"});
});

app.delete("/api/shopping/:id", function(req,res) {
	let tempId = parseInt(req.params.id,10);
	for(let i=0;i<database.length;i++) {
		if(tempId === database[i].id) {
			database.splice(i,1);
			return res.status(200).json({"message":"success"})
		}
	}
	return res.status(404).json({"message":"not found"});
});

app.post("/api/shopping/:id", function(req,res) {
	let tempId = parseInt(req.params.id,10);
	let item = {
		id: req.body.id,
		type:req.body.type,
		count:req.body.count,
		price:req.body.price
	}
	for(let i=0;i<database.length;i++) {
		if(tempId == database[i].id) {
			database.splice(i,1,item);
			return res.status(200).json({"message":"success"})
		}
	}
	return res.status(404).json({"message":"not found"});	
});

app.listen(3001);
console.log("Running in port 3001");