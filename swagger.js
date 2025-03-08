const swaggerJsDoc = require('swagger-jsdoc');
const swaggerUi = require('swagger-ui-express');

const swaggerOptions = {
    swaggerDefinition: {
        openapi: '3.0.0',
        info: {
            title: 'Vaccine Management System API',
            version: '1.0.0',
            description: 'API for managing and tracking child vaccination schedules',
        },
        servers: [{
            url: process.env.NODE_ENV === 'production'
                ? 'https://vaccine-management.vercel.app' // Thay bằng domain thực của bạn
                : 'http://localhost:5000',
        },],
        components: {
            schemas: {
                Child: {
                    type: 'object',
                    properties: {
                        name: { type: 'string' },
                        dateOfBirth: { type: 'string', format: 'date' },
                        gender: { type: 'string', enum: ['male', 'female', 'other'] },
                        parentName: { type: 'string' },
                        contactNumber: { type: 'string' },
                    },
                },
                Appointment: {
                    type: 'object',
                    properties: {
                        childId: { type: 'string' },
                        vaccineId: { type: 'string' },
                        date: { type: 'string', format: 'date-time' },
                        status: { type: 'string', enum: ['scheduled', 'completed', 'cancelled'] },
                        notes: { type: 'string' },
                    },
                },
            },
            securitySchemes: {
                bearerAuth: {
                    type: 'http',
                    scheme: 'bearer',
                    bearerFormat: 'JWT',
                },
            },
        },
        security: [
            {
                bearerAuth: [],
            },
        ],
    },
    apis: ['./src/routes/*.js'],
};

const swaggerDocs = swaggerJsDoc(swaggerOptions);

module.exports = (app) => {
    app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocs));
};