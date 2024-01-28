const fs = require('fs');
const outLocation = `${__dirname}\\output`;
if (!fs.existsSync(outLocation)) {
    fs.mkdirSync(outLocation);
}

fs.writeFileSync(`${outLocation}\\log.txt`,"This is my data");