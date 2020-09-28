const express = require('express')
const app = express()

const db = require('./database')

app.get("/", function(req, res) {
    let request = 'SELECT C.*, url, width, height FROM Content C INNER JOIN Images ON C.id_image = Images.id_image WHERE id_category = 1'
     db.query(request, (err, rows, fields) =>{
        if(err){
           res.send(err.message);
        } else {
            res.send(rows);
        }
    })
})

module.exports = app