mob.init(); 
mob.click('//XCUIElementTypeButton[@name="show alert"]');
mob.pause(5000);
const alertText = mob.getAlertText();
log.info(alertText);
const alertTextCorrect = alertText && typeof alertText === 'string' && alertText.length > 0 && alertText.includes('cool');
assert.equal(alertTextCorrect, true);
mob.alertAccept();