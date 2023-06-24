/* eslint-disable @typescript-eslint/no-var-requires */
const cluster = require("cluster");
const os = require("os");

const clusterSize = Math.min(os.cpus().length, 4);

if (cluster.isPrimary) {
  console.log("primary", process.pid);
  (async () => {
    for (let i = 0; i < clusterSize; i++) {
      cluster.fork();
    }
  })();
} else {
  console.log("worker", process.pid);
  require("./server");
}
