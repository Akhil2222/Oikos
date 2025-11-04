const express = require("express");
const App = express()

const people = ["junu", "mackowiak", "mahoney", "sparkman"]

App.get("/", (req, res)=>{
	res.sendFile(`${__dirname}/index.html`)
})

App.get("/favicon.ico", (req, res)=>{
	res.sendFile(`${__dirname}/favicon.ico`)
})


for(let i of people){
	App.get(`/interviews/${i}`, (req, res)=>{
		res.sendFile(`${__dirname}/interviews/${i}.txt`)
	})
	App.get(`/images/${i}`, (req, res)=>{
		res.sendFile(`${__dirname}/images/${i}.jpg`)
	})
}

App.listen(6969)