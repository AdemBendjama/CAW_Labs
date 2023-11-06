const fs = require('fs');

if (process.argv.length !== 3) {
    process.exit(1);
}

// Get the file path from the command-line argument
const filePath = process.argv[2];

// Read the file and display its contents
fs.readFile(filePath, 'utf8', (err, data) => {
    if (err) {
        console.error('Error reading filepath:');
    } else {
        console.log(data);
    }
});