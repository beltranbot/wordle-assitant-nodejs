const fs = require('fs');
const path = require('path');

const open = (filename) => {
  const input = fs.readFileSync(
    path.join(__dirname, filename),
    {
      encoding: 'utf-8'
    }
  );
  return input;
};

module.exports = { open };
