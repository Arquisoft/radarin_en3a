const {defineFeature, loadFeature}=require('jest-cucumber');
const feature = loadFeature('./features/login-form.feature');
const expect = require('expect-puppeteer');
const puppeteer = require('puppeteer');

defineFeature(feature, test => {
    
    beforeEach(async () => {
        await global.page.goto('http://localhost:3000/#/');
    });

    // const browser = await puppeteer.launch({
    //     headless: false,
    //     defaultViewport: null
    // });

    test('The user is already registered with a pod and logs in Radarin', ({given,when,then}) => {
    
        let username;
        let pass;

        given('An already registered user with a pod in radarin', () => {
             username = "radarintest";
             pass = "Radarintest1.";
        });
    
        when('I fill in the user name field and press the login button', async () => {
            await expect(page).toMatch('Radarin');
            await expect(page).toFill('input[name="userName"]', username);
            
            await expect(page).toClick('button', { text: 'Log in' }); 
            
            await page.goto('https://solidcommunity.net/login');
            await expect(page).toMatch('Login');
            await expect(page).toFill('input[name="username"]', username);
            await expect(page).toFill('input[name="password"]', pass);

            await expect(page).toClick('button', {text: 'Log In'});
            await page.goto('http://localhost:3000/#/profile');
        });
    
        then('I should enter in my radarin profile', async () => {
            await expect(page).toMatch('Welcome!');
        });
    });
});