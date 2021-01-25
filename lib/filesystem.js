const fs = require('fs');

module.exports = {
  loadJSON: (path) => {
    const data = fs.readFileSync(path);
    return JSON.parse(data);
  },
  writeJSON: (path, obj) => {
    fs.writeFileSync(path, JSON.stringify(obj));
  }
}
