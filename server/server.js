const express = require('express');
const app = express()
const path = require('path')
app.use('/priceCheck',express.static(path.join(__dirname, 'dist')))
// data 
const store = [
    { name: "table", inventory: 3, price: 800 },
    { name: "chair", inventory: 16, price: 120 },
    { name: "couch", inventory: 1, price: 1200 },
    { name: "picture frame", inventory: 31, price: 70 }
]
//end of data 
app.get('/priceCheck/:name' ,function(req, res){
    const name = req.params.name
    for(let count of store){
        if(name === count.name){
            res.send({"price": `${count.price}`})
        }
    }
    res.send({"price": "null"})
})
app.get('/buy/:name' ,function(req, res){
    const name = req.params.name
    for (let item of store){
        if(item.name == name){
            item.inventory--
            res.send(item)
        }
    }
})
const port = 3000
app.listen(port, function(){
    console.log("Server is up and running smoothly on port : " +port)
})
