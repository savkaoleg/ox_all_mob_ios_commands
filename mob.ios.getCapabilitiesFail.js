mob.init();
const capabilities = mob.getCapabilities();
log.info(capabilities);
const capsValid = !!capabilities && !!capabilities.aaa && !!capabilities.bbb;
assert.equal(capsValid, true, 'Caps not valid');