const {defineFeature, loadFeature}=require('jest-cucumber');
const feature = loadFeature('./features/login-form.feature');
const {setDefaultOptions} = require('expect-puppeteer');
const puppeteer = require('puppeteer');

function delay(time) {
    return new Promise(function(resolve) { 
        setTimeout(resolve, time)
    });
 }

defineFeature(feature, test => {
    
    beforeEach(async () => {
        await global.page.goto('http://localhost:3000'),
        setDefaultOptions({ timeout: 10000 });
    });

    test('The user is already registered with a pod and logs in Radarin', ({given,when,then}) => {
    
        let username;
        let pass;

        given("An already registered user with a pod in radarin", () => {
             username = "radarintest";
             pass = "Radarintest1.";             
        });
    
        when('I fill in the user name field and press the login button', async () => {                        
            await page.setViewport({ width: 1400, height: 900 });
            await expect(page).toMatch('Radarin');
            await expect(page).toFill('input[name="userName"]', username);
            await expect(page).toClick('button', {text: 'Log in'});
            await delay(2000);
            
            await expect(page).toMatch('Login');
            await expect(page).toFill('input[name="username"]', username);
            await expect(page).toFill('input[name="password"]', pass);
            
            await expect(page).toClick('button', {text: 'Log In'});
            await delay(2000);
            
        });
    
        then("I should enter in my radarin profile", async () => {
            await expect(page).toMatch("Welcome!");
        });
    });
});