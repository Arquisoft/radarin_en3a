const {defineFeature, loadFeature}=require('jest-cucumber');
const feature = loadFeature('./features/register-form.feature');

defineFeature(feature, test => {
  
  beforeEach(async () => {
    await global.page.goto('http://localhost:3000', {timeout: 60000});
  });

  test('The user is not registered in SOLID', ({given,when,then}) => {

    given('An unregistered user without a POD', () => {})

    when('I click on the Sign up link', async () => {      
      await page.goto('http://localhost:3000/#/register');      
    });

    then('I should be redirected to http://localhost:3000/#/register', async () => {
      await expect(page).toMatch('Get your SOLID pod');
      //If there were someday buttons below here, the world would be a better place...
      //await expect(page).toClick('button', {text : 'Solid Community'});      
      await page.goto('https://solidcommunity.net/register');
      await expect(page).toMatch('Already have an account?');
    });
  });

  /*
  test('The user create a non existing Solid POD', ({ given, when, then }) => {
    
    let username;
    let password;

    given('An unregistered user without a POD', () => {
      username = "teste2e";
      password = "Teste2een3a.";
    });

    when('I fill the data in the form and press submit', async () => {
        await global.page.goto("https://localhost:3000/register", {timeout: 60000});
        await expect(page).toFillForm('form#RegisterForm', {
          username,
          password,
          repeat_password: password,
          name: username,
        });
        await Promise.all([
          expect(page).toClick('button#register'),
          page.waitForNavigation({
            waitUntil: "networkidle2",
          })
        ]);
        await expect(await page.url()).toBe("https://teste2e.localhost:3000/");
    });

    then('I should be redirected to your Solid POD', async () => {
      
    });
    
  });
  */
});