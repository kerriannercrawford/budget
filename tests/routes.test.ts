import { app } from '../src/server';
import supertest from 'supertest';

test('GET /', async () => {
  await supertest(app).get('/').expect(200);
})

test('GET /api/', async () => {
  await supertest(app).get('/api/').expect(400);
})

test('GET /api/accounts', async () => {
  await supertest(app).get('/api/accounts').expect(200);
})

test('GET /api/categories', async () => {
  await supertest(app).get('/api/categories').expect(200);
})

test('GET /api/groups', async () => {
  await supertest(app).get('/api/groups').expect(200);
})

test('GET /api/payees', async () => {
  await supertest(app).get('/api/payees').expect(200);
})

test('GET /api/transactions', async () => {
  await supertest(app).get('/api/transactions').expect(200);
})

test('GET /api/users', async () => {
  await supertest(app).get('/api/users').expect(200);
})

test('GET /doesntexist', async () => {
  await supertest(app).get('/doesntexist').expect(404);
})