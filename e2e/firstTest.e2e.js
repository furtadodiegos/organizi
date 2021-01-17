describe('Example', () => {
    beforeAll(async () => {
        await device.launchApp();
    });

    beforeEach(async () => {
        await device.reloadReactNative();
    });

    test('should have welcome screen', async () => {
        await expect(element(by.id('header'))).toBeVisible();
    });

    test('Should find the fourth item and go to details page', async () => {
        await element(by.id('item_4')).tap();

        await expect(element(by.text('the number you have chosen is 4'))).toBeVisible();
    });

    test('Should type and save a new item on list', async () => {
        await element(by.id('itemInput')).typeText('6');
        await element(by.id('btnPlus')).tap();

        await expect(element(by.id('item_6'))).toBeVisible();
    });
});
