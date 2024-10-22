const express = require("express")
const cors = require("cors")

const app = express()

app.use(cors())

var username = "seenu"
var password =  123

app.listen(5000,function(){
    console.log("server started")
})

app.use(express.urlencoded({extended:true}))

app.get("/login",function(req,res){

    if(username === req.query.username && password == req.query.password)
    {
        res.send(true)
    }
    else
    {
        res.send(false)
    }

})