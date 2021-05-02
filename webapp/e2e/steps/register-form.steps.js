const {defineFeature, loadFeature}=require('jest-cucumber');
const feature = loadFeature('./features/register-form.feature');
const {setDefaultOptions} = require('expect-puppeteer');
const puppeteer = require('puppeteer');
const select = require ('puppeteer-select');

function delay(time) {
  return new Promise(function(resolve) { 
      setTimeout(resolve, time)
  });
}

defineFeature((feature, test) => {
  
  beforeEach(async () => {
    await global.page.goto('http://localhost:3000'),
    setDefaultOptions({ timeout: 10000 });
  });

  test('The user create a non existing Solid POD', ({given,when,then}) => {

    let username;
    let password;

    given('An unregistered user without a POD', () => {
      username = "test321";
      password = "Radarin321.";
    })

    when('I click on the Solid Community at the Sign up link', async () => {      
      await page.setViewport({ width: 1400, height: 900 });
      await expect(page).toMatch('Radarin');
      
      const signup = await select(page).getElement('a:contains(Sign up)');
      await signup.click();
      await delay(3000);
      await expect(page).toMatch('Get your pod');
      const solid = await select(page).getElement('a:contains(Solid Community)');
      await solid.click();
      await delay(2000);
    });

    then('I should be able to create a solid POD', async () => {      
      await expect(page).toFill('input[name="username"]', username);
      await expect(page).toFill('input[name="password"]', password);
      await expect(page).toFill('input[name="repeat_password"]', password);
      await expect(page).toFill('input[name="name"]', "RadarinTest321");
      await expect(page).toFill('input[name="email"]', "testpurposes@gmail.com");
      await expect(page).toClick('button', {text: 'Register'});
      await expect(page).toMatch("https://test321.solidcommunity.net/");
      await delay(3000);
    });
  });

  test('The user create an already existing solid POD', ({given,when,then}) => {

    let username;
    let password;

    given('An unregistered user without a POD', () => {
      username = "test321";
      password = "Radarin321.";
    })

    when('I click on the Solid Community at the Sign up link', async () => {      
      await page.setViewport({ width: 1400, height: 900 });
      await expect(page).toMatch('Radarin');
      
      const signup = await select(page).getElement('a:contains(Sign up)');
      await signup.click();
      await delay(1000);
      await expect(page).toMatch('Get your pod');
      const solid = await select(page).getElement('a:contains(Solid Community)');
      await solid.click();
      await delay(2000);
    });

    then('I should be told that the user already exists', async () => {      
      await expect(page).toFill('input[name="username"]', username);
      await expect(page).toFill('input[name="password"]', password);
      await expect(page).toFill('input[name="repeat_password"]', password);
      await expect(page).toFill('input[name="name"]', "RadarinTest321");
      await expect(page).toFill('input[name="email"]', "testpurposes@gmail.com");
      await expect(page).toClick('button', {text: 'Register'});
      await delay(500);
      await expect(page).toMatch("Account already exists");
      await delay(3000);     
    });
  });

  test('The user create a non existing Inrupt POD', ({given,when,then}) => {

    let username;
    let password;

    given('An unregistered user without a POD', () => {
      username = "test321";
      password = "Radarin321.";
    })

    when('I click on the Solid Community at the Sign up link', async () => {      
      await page.setViewport({ width: 1400, height: 900 });
      await expect(page).toMatch('Radarin');
      
      const signup = await select(page).getElement('a:contains(Sign up)');
      await signup.click();
      await delay(1000);
      await expect(page).toMatch('Get your pod');
      const inrupt = await select(page).getElement('a:contains(Inrupt)');
      await inrupt.click();
      await delay(2000);
    });

    then('I should be able to create an inrupt POD', async () => {      
      await expect(page).toFill('input[name="username"]', username);
      await expect(page).toFill('input[name="password"]', password);
      await expect(page).toFill('input[name="repeat_password"]', password);
      await expect(page).toFill('input[name="name"]', "RadarinTest321");
      await expect(page).toFill('input[name="email"]', "testpurposes@gmail.com");
      await expect(page).toClick('button', {text: 'Register'});
      await expect(page).toMatch("https://test321.inrupt.net/");
      await delay(3000);
    });
  });
});