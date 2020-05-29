// tslint:disable-next-line: import-spacing
const cp = require("child_process");

module.exports = (command, options = { log: false, cwd: process.cwd() }) => {
  return new Promise((done, failed) => {
    cp.exec(command, { ...options }, (err, stdout, stderr) => {
      if (err) {
        failed({ stdout, stderr });
        return;
      }

      done({ stdout, stderr });
    });
  });
};
