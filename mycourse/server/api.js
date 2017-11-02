const express = require('express');
const router = express.Router();
const mongoClient = require('mongodb').MongoClient;
const mongo_string = "mongodb://localhost:27017/cmcourse"


router.get('/show', function (req, res) {
    //res.end("Hi, show api");
    mongoClient.connect(mongo_string, function (req, db) {
        db.collection("course")
        .find()
        .toArray()
        .then(course=> {
            const output = {result : "ok", message : course}
            res.json(output);
        });
        db.close();
    });
})

router.post('/add', function (req, res) {
    mongoClient.connect(mongo_string, function (err, db) {

    const data = {name : req.body.name, size : req.body.size, sex : req.body.sex };
    db.collection('course')
    .insertOne(data, (err, result)=>{
        if (err) throw err;
        const response = {result : 'ok', message : result.result.n + " Inserted"};
        res.json(response);
    });
    db.close();
});
})

router.post('/update', function (req, res){
    res.end("Hi update api: " + req.body.name);
})

router.delete('/delete/:name', function (req, res) {
    res.end("Hi delete api: " + req.params.name);
})

module.exports = router;
