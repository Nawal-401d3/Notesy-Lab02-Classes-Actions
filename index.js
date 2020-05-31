#!/usr/bin/env node

// Lab01 + Lab02 
'use strict';

const Input = require('./lib/input.js');
const Notes = require('./lib/notes.js');

let parsedInput = new Input(process.argv.slice(2));
let notes = new Notes(parsedInput);

console.log('up and running');