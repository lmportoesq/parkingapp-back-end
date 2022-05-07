/* eslint-disable */
const res = require('express/lib/response');
const supertest = require('supertest');

const app = require('../../app');

const request = supertest(app);

describe('Test to api parkings endpoints', () => {
<<<<<<< HEAD
  describe('GET /parkings', () => {
=======
  describe('GET all /parkings', () => {
>>>>>>> develop
    test('should respond with a 200 status code', async () => {
      const res = await request.get('/api/parkings');

      expect(res.statusCode).toEqual(200);
    });
  })

  describe('GET /parkings/:id', () => {
    test('should respond with a 200 status code', async () => {
      const res = await request.get('/api/parkings/624a267bf8208c44da909327');
      expect(res.statusCode).toEqual(200);
    });

    test('should respond with a 404 when parking is not found', async () => {
      const res = await request.get('/api/parkings/624a21db8a2706d1ad061dff');
      expect(res.statusCode).toEqual(404);
      expect(res.body).toEqual({
        message: 'Parking not found with id 624a21db8a2706d1ad061dff'
      });
    });
  })

  describe('POST /parkings', () => {
    test('should respond with a 201 status code when parking is created', async () => {
      const parking = {
        _id: "624fb5d8e7fe33365bb7ffff",
        position: {
          latitude: 6.244028852258511,
          longitude: -75.57022547256459
        },
        name: "PARKING ON ICE 8888",
        cityName: "MEDELLÍN",
        addres: "av. palacé #88-88",
        phone: 3135478632,
        openTime: "05h00m",
        closeTime: "19h00m",
        hourValue: 4300,
        totalPlaces: 30,
        busyPlaces: 0
      };
      const res = await request.post('/api/parkings').send(parking);
      expect(res.statusCode).toEqual(201);
    });

    test('should response with a 500 satus when parkin is not create', async () => {
      const parking = {
        cityName: "cali",
      }
      const res = await request.post('/api/parkings').send(parking);
      expect(res.statusCode).toEqual(500);
    });
  })

  describe('DELETE /parkings/:id', () => {
    test('should respond with a 200 status code when parking is deleted', async () => {
      const res = await request.delete('/api/parkings/624fb5d8e7fe33365bb7ffff');
      expect(res.statusCode).toEqual(200);
      expect(res.body).toEqual({
        message: 'Parking with id: 624fb5d8e7fe33365bb7ffff was delete'
      });
    });

    test('should respond with a 404 when parking is not found', async () => {
      const res = await request.delete('/api/parkings/624e7c208e81d2cbe3467bc0');
      expect(res.statusCode).toEqual(404);
      expect(res.body).toEqual({
        message: 'Parking not found with id: 624e7c208e81d2cbe3467bc0, it was not delete'
      });
    });
  });

  describe('PATCH /parkings', () => {
    test('should respons with a 201 status when parking is update', async () => {
      const parking = {
        name: "Update parking name 1",
      }
      const res = await request.patch('/api/parkings/624fb5d8e7fe33365bb7238d').send(parking);
      expect(res.statusCode).toEqual(201);
    });

    test('should response with a 500 status when a parking is not found', async () => {
      const parking = {
        name: "Update name again",
      }
      const res = await request.patch('/api/parkings/624f69b2612e9f5b7ed6b135').send(parking);
      expect(res.statusCode).toBe(404);
      expect(res.body).toEqual({
        message: 'Parking with id 624f69b2612e9f5b7ed6b135 can not be update'
      });
    });
  });

});
