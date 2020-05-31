#!/usr/bin/env node
'use strict';

const mongoose = require('mongoose');
const dbURL = 'mongodb://localhost:27017/newNotes';
const Notes = require('./lib/notes.js');
const Input = require('./lib/input.js')
// const Catagories = require('./models/catagories-schema.js');

 mongoose.connect(dbURL, { useNewUrlParser: true, useUnifiedTopology: true});

let args = process.argv.slice(2);

let myInput = new Input(args);
let myHandler = new Notes(myInput.command);




