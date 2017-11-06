const express = require('express');
const router = express.Router();
const mongoClient = require('mongodb').MongoClient;
const ObjectId = require('mongodb').ObjectID;
const mongo_string = "mongodb://localhost:27017/cmcourse"


router.get('/show/:username', function (req, res) {
    const query = {name : req.params.username};
    //res.end("Hi, show api");
    mongoClient.connect(mongo_string, function (req, db) {
        db.collection("course")
        .find(query)
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
    const data = {name : req.body.name };
    db.collection('course')
    .insertOne(data, (err, result)=>{
        if (err) throw err;
        const response = {result : 'ok', message : result.result.n + " Inserted"};
        res.json(response);
    });
    db.close();
});
})


router.delete('/delete/:name', function (req, res) {
    //res.end("Hi delete api: " + req.params.name);
    mongoClient.connect(mongo_string, function (err, db) {
    const query = {name : req.params.name };
    db.collection('course')
    .deleteMany(query, function (err, result){
        const response = {result : 'ok', message : result.result.n + " Deleted"};
        res.json(response);
    });
    db.close();
});
})


router.post('/update/:id', function (req, res) {
    //res.end("Hi update api: ObjectId(" + req.params.id + ")" );
    mongoClient.connect(mongo_string, function (err, db) {
    const query = { _id : ObjectId(req.params.id) };
    const newvalues = { $set: {name: req.body.name } };
    db.collection('course')
    .updateOne(query, newvalues, function (err, result){
        const response = {result : 'ok', message : result.result.n + " Updated"};
        res.json(response);
    });
    db.close();
});
})

module.exports = router;