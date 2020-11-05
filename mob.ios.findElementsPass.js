mob.init();
const elements = mob.findElements('//XCUIElementTypeStaticText[@name="AppElem"]');
assert.equal(elements.length, 2);