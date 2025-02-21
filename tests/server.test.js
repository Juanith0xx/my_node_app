const request = require('supertest');
const app = require('../server');

let server;

beforeAll(() => {
  server = app.listen(9000); // Inicia el servidor antes de las pruebas
});

afterAll((done) => {
  server.close(done); // Cierra el servidor después de las pruebas
});

test('GET / should return "Hello World"', async () => {
  const response = await request(server).get('/');
  expect(response.text).toBe('Hello World');
});