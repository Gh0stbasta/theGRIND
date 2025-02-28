const fs = require("fs"); // Thats the filesystem module to work with files
const path = require("path"); // Thats a module to work with path variables

const directoryPath = path.join(__dirname, "files"); // here we create a path to a folder within our folder that is named "files"


fs.readdir(directoryPath, (err, files) => { // we have to rad the files into an array called "files" ... thats the second parameter of the callback
if (err) {
    return console.log("Kann den Ordner nicht auslesen");
}

files.forEach((file, index) => { // now we take every file and do our stuff
    const oldPath = path.join(directoryPath, file); // creating the old path so that the shell knows, which file it has to rename ... I guess somehow the shell commands are used here
    const newPath = path.join( // creating the new path with the new file name
    directoryPath,
    `ohneFunktion-${index}-${path.extname(file)}`
    );

    fs.rename(oldPath, newPath, (err) => { // now taking all our variable and putting them into our rename method
    if (err) {
        console.log(`Kann ${file} nicht wirklich umbenennen` + err);
    } else {
        console.log(`${file} mit dem Ding hats geklappt`);
    }
    });
});
});


