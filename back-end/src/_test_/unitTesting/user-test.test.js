const request = require('supertest');
const app = require('../app'); // Import your Express app

describe('User Registration', () => {
    it('should return 400 if any field is missing', async () => {
        const response = await request(app)
            .post('/users/register')
            .send({ email: 'test@example.com', password: '123456' });

        expect(response.status).toBe(400);
        expect(response.body.error).toBe('All fields are required');
    });

    it('should return 400 if email is already in use', async () => {
        const existingEmail = 'existing@example.com';

        // Assume you have a way to insert a user with this email in your tests

        const response = await request(app)
            .post('/users/register')
            .send({ name: 'Test User', email: existingEmail, password: '123456' });

        expect(response.status).toBe(400);
        expect(response.body.error).toBe('Email already in use');
    });

    it('should return 201 if registration is successful', async () => {
        const newUser = { name: 'New User', email: 'new@example.com', password: '123456' };

        const response = await request(app)
            .post('/users/register')
            .send(newUser);

        expect(response.status).toBe(201);
        expect(response.body.message).toBe('User registered successfully');
    });

    it('should return 500 on server error', async () => {
        const response = await request(app)
            .post('/users/register')
            .send({ name: 'Server Error', email: 'error@example.com', password: '123456' });

        // Simulate server error by intercepting query
        // Here you'd need a way to simulate a database error; this might require mocking or stubbing your DB connection

        expect(response.status).toBe(500);
        expect(response.body.error).toBe('Server error');
    });
});
