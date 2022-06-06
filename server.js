const path = require('path')
const fs = require('fs')
const express = require('express')
const app = express()
const cors = require('cors')

app.use(express.json())
app.use(cors());

// MONGODB CONNECTION
const MongoClient = require('mongodb').MongoClient;
let db;
MongoClient.connect("mongodb+srv://kouhai:@gogoanime234@cluster0.iyq0a.mongodb.net/?retryWrites=true&w=majority", (err, client) => {
    db = client.db('lessons')
})



const port = process.env.PORT || 3000
app.listen(port, () => {
    console.log("Running on port 3000")
})
