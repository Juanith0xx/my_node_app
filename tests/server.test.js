const request = require('supertest');
const app = require('../server'); // Importamos la instancia del servidor

let server; // Variable para guardar la instancia del servidor

beforeAll(() => {
  server = app.listen(9001, () => console.log('Test server running at http://localhost:9001'));
});

afterAll((done) => {
  server.close(done); // Cerrar el servidor después de las pruebas
});

test('GET / should return "Hello World"', async () => {
  const response = await request(app).get('/');
  expect(response.text).toBe('Hello World');
});
