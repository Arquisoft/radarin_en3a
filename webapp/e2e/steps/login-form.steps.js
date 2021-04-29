const {defineFeature, loadFeature}=require('jest-cucumber');
const feature = loadFeature('./features/login-form.feature');
const expect = require('expect-puppeteer');
const puppeteer = require('puppeteer');

defineFeature(feature, test => {
    
    beforeEach(async () => {
        await global.page.goto('http://localhost:3000')
    });

    test('The user is already registered with a pod and logs in Radarin', ({given,when,then}) => {
    
        let username;
        let pass;

        given('An already registered user with a pod in radarin', () => {
             username = "radarintest";
             pass = "Radarintest1.";             
        });
    
        when('I fill in the user name field and press the login button', async () => {                        
            await expect(page).toMatch('Radarin');
            await expect(page).toMatchElement('input');
            await page.waitFor('input');
            await page.$eval('input', x => x.value = "radarintest");
            
            //  const [response] = await Promise.all([
            //      page.click('button', { text: 'Log in' }),
            //      page.waitForNavigation('networkidle2')
            //  ]);
            
            //await page.click({type:'xpath', value:'/html/body/div/div/div/div/nav/div/div[2]/div[2]/div/div/form/button'},{text: 'Log in'});
            
            await page.click('button.log-in-btn btn btn-primary');

            await expect(page).toMatch('Login');
            /*
            await expect(page).toMatch('Login');
            await expect(page).toFill('input[name="username"]', username);
            await expect(page).toFill('input[name="password"]', pass);
            await navigationPromise;
            await expect(page).toClick('button', {text: 'Log In'});
            await page.goto('http://localhost:3000/#/profile');
            */
        });
    
        then('I should enter in my radarin profile', async () => {
            //await expect(page).toMatch('Welcome!');
        });
    });
});