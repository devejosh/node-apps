// importing file system (fs) module.
const fsModule = require ('fs')

fsModule.writeFileSync('notes.txt', "My name is Devendra. This file was created with nodejs!") 

// Appending data to the same file.
// fs.appendFile(<file name /complete path to the file in question , 'data to append to the current file')

fsModule.appendFileSync('notes.txt', 'This is the appended data to the file.')
