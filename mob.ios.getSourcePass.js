mob.init();
const source = mob.getSource();
log.info(source);
const sourceCorrect = source && typeof source === 'string' && source.length > 0;
assert.equal(sourceCorrect, true);