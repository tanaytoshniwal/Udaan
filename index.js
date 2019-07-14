const express = require('express');
const cors = require('cors');
const assert = require('assert');
const bodyParser = require('body-parser');
const mongodb = require('mongodb');

const MongoClient = mongodb.MongoClient;
const PORT = process.env.PORT || 5000;

const app = express();
const url = 'mongodb://sample:sample123@ds249123.mlab.com:49123/udaan';
const dbName = 'udaan';
const assets_collection = 'assets';
const tasks_collection = 'tasks';
const workers_collection = 'workers';
let db;

app.use(bodyParser.json());
app.use(cors());
MongoClient.connect(url, function(err, client){
    assert.equal(null, err);
    db = client.db(dbName);
});

// add-asset API
app.post('/add-asset', (req, res)=>{
    let data = req.body;
    db.collection(assets_collection).find({}).toArray((err, r)=>{
        assert.equal(null, err);
        data.assetId = r.length+1 + '';
        db.collection(assets_collection).insertOne(data, (err, r)=>{
            assert.equal(null, err);
            res.json(r);
        });
    });
});

// add-task API
app.post('/add-task', (req, res)=>{
    let data = req.body;
    db.collection(tasks_collection).find({}).toArray((err, r)=>{
        assert.equal(null, err);
        data.taskId = r.length+1 + '';
        db.collection(tasks_collection).insertOne(data, (err, r)=>{
            assert.equal(null, err);
            res.json(r);
        });
    })
});

// add-worker API
app.post('/add-worker', (req, res)=>{
    let data = req.body;
    db.collection(workers_collection).find({}).toArray((err, r)=>{
        assert.equal(null, err);
        data.workerId = r.length+1 + '';
        db.collection(workers_collection).insertOne(data, (err, r)=>{
            assert.equal(null, err);
            res.json(r);
        })
    })
})

// assets/all API
app.get('/assets/all', (req, res)=>{
    db.collection(assets_collection).find({}).toArray((err, r)=>{
        res.json(r);
    });
})

// allocate-task API
app.post('/allocate-task', (req, res)=>{
    let worker = req.body.worker;
    let task = worker.tasks;
    task.push(req.body.task);
    db.collection(workers_collection).findOneAndUpdate({"workerId": worker.workerId}, {$set: {tasks: task}}, (err, r)=>{
        assert.equal(null, err);
        res.json(r)
    });
})

// get-tasks-for-worker/{workerId}
app.get('/get-tasks-for-worker/:id', (req, res)=>{
    let id = req.params.id;
    db.collection(workers_collection).find({"workerId": id}).toArray((err, r)=>{
        res.json(r[0].tasks);
    });
})

app.listen(PORT, function(){
    console.log('Server started at port: 5000');
})