const fs = require('fs');

if (process.argv.length < 4) {
    process.exit(1);
}

const destinationFile = process.argv[2];
const textToSave = process.argv.slice(3).join(' ');

fs.writeFile(destinationFile, textToSave, (err) => {
    if (err) {
        console.error('Error writing to the file:', err);
    } else {
        console.log('The file has been saved!');
    }
});
