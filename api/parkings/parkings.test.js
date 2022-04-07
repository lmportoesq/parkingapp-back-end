/* eslint-disable */
const supertest = require('supertest');

const app = require('../../app');

const request = supertest(app);

describe('Test to api parkings endpoints', () => {
  describe('GET /parkings', () => {
    test('should respond with a 200 status code', async () => {
      const res = await request.get('/api/parkings');

      expect(res.statusCode).toEqual(200);
    });
  })

  describe('GET /parkings/:id', () => {
    test('should respond with a 200 status code', async () => {
      const res = await request.get('/api/parkings/624a21db8a2706d1ad061db9');
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

  describe('DELETE /parkings/:id', () => {
    test('should respond with a 200 status code when parking is deleted', async () => {
      const res = await request.delete('/api/parkings/624e80768f69b0e168aa424b');
      expect(res.statusCode).toEqual(200);
      expect(res.body).toEqual({
        message: 'Parking with id: 624e80768f69b0e168aa424b was delete'
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

  describe('POST /parkings', () => {
    test('should respond with a 201 status code when parking is created', async () => {
      const parking = {
        position: {
          latitude: 6.244028852258511,
          longitude: -75.57022547256459
        },
        name: "PARQUEADERO PALACE",
        cityName: "MEDELLÍN",
        addres: "av. palacé #3",
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

    /*
    test('should respond with a 500 when parking name is missing', async () => {
      const parking = {
        position: {
          latitude: 6.244028852258511,
          longitude: -75.57022547256459
        },
        cityName: "MEDELLÍN",
        addres: "av. palacé #3",
        phone: 3135478632,
        openTime: "05h00m",
        closeTime: "19h00m",
        hourValue: 4300,
        totalPlaces: 30,
        busyPlaces: 0
      }
      const res = await request.post('/api/parkings/').send(parking);
      expect(res.statusCode).toEqual(500);
      expect(res.body).toEqual({
        message: 'Parking validation failed: name: Path `name` is required.'
      });
    });
    */
  })

});

/*



describe('PATCH /parkings/:id', () => {
  test('should respond with a 200 status code', async () => {
    const res = await request.get('/api/parkings');

    expect(res.statusCode).toEqual(200);
  });
})
*/

// test('should respond with an array of parkings', async () => {
//   const res = await request.get('/api/parkings/');

//   expect(res.body).toBeInstanceOf(Array);
//   expect(res.body).toEqual(expect.arrayContaining([
//     expect.objectContaining({
//       position: expect.any(Object),
//       _id: expect.any(String),
//       name: expect.any(String),
//       cityName: expect.any(String),
//       addres: expect.any(String),
//       phone: expect.any(Number),
//       openTime: expect.any(String),
//       closeTime: expect.any(String),
//       hourValue: expect.any(Number),
//       totalPlaces: expect.any(Number),
//       busyPlaces: expect.any(Number),
//       createdAt: expect.any(Date),
//       updatedAt: expect.any(Date),
//       user: expect.any(String),
//     }),
//   ]));
// });
