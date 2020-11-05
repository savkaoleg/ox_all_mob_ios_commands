mob.init();
const logs = mob.getAppiumLogs();
log.info(logs);
const logsCorrect = logs && Array.isArray(logs);
assert.equal(logsCorrect, true);