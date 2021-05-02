const {defineFeature, loadFeature}=require('jest-cucumber');
const feature = loadFeature('./features/navigation.feature');
const {setDefaultOptions} = require('expect-puppeteer');
const select = require ('puppeteer-select');
const puppeteer = require('puppeteer');

function delay(time) {
    return new Promise(function(resolve) { 
        setTimeout(resolve, time)
    });
 }

defineFeature(feature, test => {
    
    beforeEach(async () => {
        await global.page.goto('http://localhost:3000'),
        setDefaultOptions({ timeout: 10000 })
    });

    test('The user logs in Radarin and navigate to friends view', ({given,when,then}) => {
    
        let username;
        let pass;

        given('An already registered user in the profile page', () => {
             username = "radarintest";
             pass = "Radarintest1.";             
        });
    
        when('I try to go to different links of the app', async () => {                        
            await page.setViewport({ width: 1400, height: 900 });
            await expect(page).toMatch('Radarin');
            await expect(page).toFill('input[name="userName"]', username);
            await expect(page).toClick('button', {text: 'Log in'});
            await delay(2000);
            
            await expect(page).toMatch('Login');
            await expect(page).toFill('input[name="username"]', username);
            await expect(page).toFill('input[name="password"]', pass);
            
            await expect(page).toClick('button', {text: 'Log In'});
            await delay(5000);

            const friends = await select(page).getElement('a:contains(Friends)');
            await friends.click();
            await delay(2000);
        });
    
        then('I should enter in radarin friends view', async () => {
            await expect(page).toMatch('Friend list');
        });
    });
    
    // test('The user logs in Radarin and navigate to map view', ({given,when,then}) => {
    
    //     let username;
    //     let pass;

    //     given('An already registered user in the profile page', () => {
    //          username = "radarintest";
    //          pass = "Radarintest1.";             
    //     });
    
    //     when('I try to go to different links of the app', async () => {                        
    //         await page.setViewport({ width: 1400, height: 900 });
    //         /*
    //         await expect(page).toMatch('Radarin');
    //         await expect(page).toFill('input[name="userName"]', username);
    //         await expect(page).toClick('button', {text: 'Log in'});
    //         await delay(3000);
            
    //         await expect(page).toMatch('Login');
    //         await expect(page).toFill('input[name="username"]', username);
    //         await expect(page).toFill('input[name="password"]', pass);
            
    //         await expect(page).toClick('button', {text: 'Log In'});
    //         await delay(1000);
    //         */
    //         const map = await select(page).getElement('a:contains(Map)');
    //         await map.click();
            
    //         await delay(2000);
    //     });
    
    //     then('I should enter in radarin map view', async () => {
    //         await expect(page).toMatch('Map of your locations:');
    //     }); 
    // });

    // test('The user logs in Radarin and navigate to locations view', ({given,when,then}) => {
    
    //     let username;
    //     let pass;

    //     given('An already registered user in the profile page', () => {
    //          username = "radarintest";
    //          pass = "Radarintest1.";             
    //     });
    
    //     when('I try to go to different links of the app', async () => {                        
    //         await page.setViewport({ width: 1400, height: 900 });
            
    //         await expect(page).toMatch('Radarin');
    //         await expect(page).toFill('input[name="userName"]', username);
    //         await expect(page).toClick('button', {text: 'Log in'});
    //         await delay(2000);
    //         /*
    //         await expect(page).toMatch('Login');
    //         await expect(page).toFill('input[name="username"]', username);
    //         await expect(page).toFill('input[name="password"]', pass);
            
    //         await expect(page).toClick('button', {text: 'Log In'});
    //         await delay(2000);
    //         */
    //         const [locations] = await page.$x("//a[contains(., 'Locations')]");
    //         if (locations) {
    //             await locations.click();
    //         }
    //         await delay(3000);
    //     });
    
    //     then('I should enter in radarin locations view', async () => {
    //         await expect(page).toMatch('Your locations');
    //     });
    // });
});