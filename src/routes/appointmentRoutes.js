const express = require('express');
const router = express.Router();
const auth = require('../middleware/auth');
const appointmentController = require('../controller/appointmentController');

/**
 * @swagger
 * tags:
 *   name: Appointments
 *   description: Quản lý lịch hẹn tiêm chủng
 */

/**
 * @swagger
 * /api/appointments:
 *   post:
 *     summary: Đặt lịch hẹn tiêm chủng
 *     tags: [Appointments]
 *     security:
 *       - bearerAuth: []
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               childId:
 *                 type: string
 *                 example: 64f1b1e1b2c3d4e5f6a7b8c9
 *               vaccineId:
 *                 type: string
 *                 example: 64f1b1e1b2c3d4e5f6a7b8c9
 *               date:
 *                 type: string
 *                 format: date-time
 *                 example: 2023-10-15T09:00:00Z
 *               notes:
 *                 type: string
 *                 example: Ghi chú về lịch hẹn
 *     responses:
 *       201:
 *         description: Đặt lịch thành công
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Appointment'
 *       400:
 *         description: Lỗi đặt lịch
 */
router.post('/', auth, appointmentController.createAppointment);

/**
 * @swagger
 * /api/appointments:
 *   get:
 *     summary: Lấy danh sách lịch hẹn
 *     tags: [Appointments]
 *     security:
 *       - bearerAuth: []
 *     responses:
 *       200:
 *         description: Danh sách lịch hẹn
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/Appointment'
 *       401:
 *         description: Không có quyền truy cập
 */
router.get('/', auth, appointmentController.getAppointments);

module.exports = router;