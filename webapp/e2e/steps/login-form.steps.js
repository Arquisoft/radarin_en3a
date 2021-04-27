const {defineFeature, loadFeature}=require('jest-cucumber');
const feature = loadFeature('./features/login-form.feature');

defineFeature(feature, test => {

    beforeEach(async () => {
        await global.page.goto('http://localhost:3000/#', {timeout: 60000});
    });
    
    test('The user is already registered with a pod and logs in Radarin', ({given,when,then}) => {
    
        given('An already registered user with a pod in radarin', () => {
            username = "radarintest";
        });
    
        when('I fill in the user name field and press the login button', async () => {
            console.log('filling the user name...');
            await expect(page).toFillForm('form[name="form"]',
                {
                    userName: username
                });
            console.log('Clicking Log in...');
            await expect(page).toClick('button', { text: 'Log in' });            
        });
    
        then('I should enter in my radarin profile', async () => {
            //await expect(page).toMatch('http://localhost:3000/#/profile');
        });
    });
});