const request = require('supertest');
const server = require('./server-for-tests')

/**
 * Connect to a new in-memory database before running any tests.
 */
beforeAll(async () => {
    await server.startdb()
    app = await server.startserver()
});

/**
 * Clear all test data after every test.
 */
afterEach(async () => await server.clearDatabase());

/**
 * Remove and close the db and server.
 */
afterAll(async () => {
    await server.closeServer() //finish the server
    await server.closeDB()
})

/**
 * Product test suite.
 */
describe('user ', () => {
    /**
     * Test that we can list users without any error.
     */
    it('can be listed', async () => {
        const response = await request(app).get("/api/users/list");
        expect(response.statusCode).toBe(200);
    });

    /**
     * Tests that a user can be created through the productService without throwing any errors.
     */
    it('can be created correctly', async () => {
        username = 'Pablo'
        email = 'pablo@uniovi.es'
        const response = await request(app).post('/api/users/add').send({ webId: username, longitude: 0, latitude: 0 }).set('Accept', 'application/json')
        expect(response.statusCode).toBe(200);
        expect(response.body.webId).toBe(username);
    });

    //tests started by armando started here

    /*
    Deletion test
    */
    it('can be deleted correctly', async () => {
        webId = 'Pablo'
        await request(app).post('/api/users/add').send({ webId: webId, longitude: 0, latitude: 0 }).set('Accept', 'application/json')


        await request(app).post('/api/users/remove').send({ webId: username, longitude: 0, latitude: 0 }).set('Accept', 'application/json')

        const user = await (await request(app).get('/api/users/list')).body.find(u => u.webId === webId);
        expect(user.body).toBe(null);
    });

    /*
    Location deletion test
    */
    it('location can be deleted correctly', async () => { });

    /*
Adding a location
*/
    it('locations can be saved', async () => {
        webId = 'Pablo'
        longitude = 0
        latitude = 0

        await request(app).post('/api/users/add').send({ webId: webId, longitude: longitude, latitude: latitude }).set('Accept', 'application/json')
        const update = await request(app).post('/api/locations/add').send({ webId: webId, longitude: 9, latitude: 8 }).set('Accept', 'application/json')
        expect(update.body.latitude).toBe(8);
        expect(update.body.longitude).toBe(9);
    });

});