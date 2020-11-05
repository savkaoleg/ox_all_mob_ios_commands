mob.init();
const capabilities = mob.getCapabilities();
log.info(capabilities);
const capsValid = !!capabilities && !!capabilities.platformName;
assert.equal(capsValid, true, 'Caps not valid');