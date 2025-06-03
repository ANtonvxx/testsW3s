/* 
   3. Try to send requests for all these (https://restful-api.dev/) endpoints
*/

import { test, expect, request } from '@playwright/test';
import * as dotenv from 'dotenv';
dotenv.config();

const BASE_URL = 'https://api.restful-api.dev';

test.describe('RESTful API demo (playwright)', () => {

  //GET list of objects
  test('GET /objects - should return list of objects', async ({ request }) => {
    const res = await request.get(`${BASE_URL}/objects`);
    expect(res.ok()).toBeTruthy();

    const data = await res.json();
    expect(Array.isArray(data)).toBe(true);
  });

  //POST a new object
  test('POST /objects - should create an object', async ({ request }) => {
    const payload = {
      name: 'Test Device',
      data: { year: 2024, info: 'Test info' },
    };

    const res = await request.post(`${BASE_URL}/objects`, {
      data: payload,
    });

    expect(res.status()).toBe(200);

    const body = await res.json();
    expect(body).toHaveProperty('id');
    expect(body.name).toBe(payload.name);
  });

  //GET the created object
  test('GET /objects/:id - should retrieve created object', async ({ request }) => {
    const created = await request.post(`${BASE_URL}/objects`, {
      data: { name: 'Temp object', data: { ok: true } },
    });

    const { id } = await created.json();
    const getRes = await request.get(`${BASE_URL}/objects/${id}`);
    expect(getRes.status()).toBe(200);

    const obj = await getRes.json();
    expect(obj.id).toBe(id);
  });

  //PUT update the object
  test('PUT /objects/:id - should update object', async ({ request }) => {
    const created = await request.post(`${BASE_URL}/objects`, {
      data: { name: 'Old', data: { a: 1 } },
    });

    const { id } = await created.json();

    const updateRes = await request.put(`${BASE_URL}/objects/${id}`, {
      data: { name: 'Updated', data: { b: 2 } },
    });

    expect(updateRes.status()).toBe(200);

    const updated = await updateRes.json();
    expect(updated.name).toBe('Updated');
  });

  //Delete the object
  test('DELETE /objects/:id - should delete object', async ({ request }) => {
    const created = await request.post(`${BASE_URL}/objects`, {
      data: { name: 'Delete Me', data: {} },
    });

    const { id } = await created.json();

    const delRes = await request.delete(`${BASE_URL}/objects/${id}`);
    expect(delRes.status()).toBe(200);

    const getRes = await request.get(`${BASE_URL}/objects/${id}`);
    expect(getRes.status()).toBe(404);
  });
});
