// Importing the chalk lib to our project   
import chalk from 'chalk';
import yargs, { describe } from 'yargs';
import { hideBin } from 'yargs/helpers';

// Local imports 
import { printName } from './notes.js';


const argv = yargs(hideBin(process.argv))
// Creating a notes taking app. 
argv.command({
    command : 'add',
    description : 'Adds a new note',
    builder : {
        title : {
            describe : 'note title'
        }
    },
    handler : function () {
        console.log ('Hello, this is the add command being executed.')
    }
})

argv.command({
    command : 'remove',
    description : 'Removes the note',
    handler : function () {
        console.log ("Removing the notes")
    }
})

argv.command({
    command : 'read',
    description : 'Reads out the list of notes',
    handler : function () {
        console.log ("Reading the list of notes")
    }
})

argv.command({
    command : 'read',
    description : 'Helps read the note',
    handler : function () {
        console.log ("Reading the note!")
    }
})

console.log (argv.argv)