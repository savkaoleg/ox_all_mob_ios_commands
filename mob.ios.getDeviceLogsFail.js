mob.init();
const logs = mob.getDeviceLogs();
log.info(logs);
const logsCorrect = logs && Array.isArray(logs);
assert.equal(logsCorrect, true);