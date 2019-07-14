const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const asset = new Schema({
    assetId: String,
    title: String
});
const task = new Schema({
    taskId: String,
    title:  String,
    asset: String,
    frequency: String,
    allocated: { type: Date, default: Date.now },
    performedBy: { type: Date, default: Date.now }
});
const worker = new Schema({
    workerId: String,
    name: String,
    tasks: []
});

const Asset = mongoose.model('Asset', asset);
const Task = mongoose.model('Task', task);
const Worker = mongoose.model('Worker', worker);