const express = require('express');
const router = express.Router();
const auth = require('../middleware/auth');
const childController = require('../controller/childController');

/**
 * @swagger
 * tags:
 *   name: Children
 *   description: Quản lý hồ sơ trẻ em
 */

/**
 * @swagger
 * /api/children:
 *   post:
 *     summary: Tạo hồ sơ trẻ em
 *     tags: [Children]
 *     security:
 *       - bearerAuth: []
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               name:
 *                 type: string
 *                 example: Nguyễn Văn A
 *               dateOfBirth:
 *                 type: string
 *                 format: date
 *                 example: 2020-01-01
 *               gender:
 *                 type: string
 *                 enum: [male, female, other]
 *                 example: male
 *               parentName:
 *                 type: string
 *                 example: Nguyễn Văn B
 *               contactNumber:
 *                 type: string
 *                 example: 0912345678
 *     responses:
 *       201:
 *         description: Tạo hồ sơ thành công
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Child'
 *       400:
 *         description: Lỗi tạo hồ sơ
 */
router.post('/', auth, childController.createChild);

/**
 * @swagger
 * /api/children:
 *   get:
 *     summary: Lấy danh sách trẻ em
 *     tags: [Children]
 *     security:
 *       - bearerAuth: []
 *     responses:
 *       200:
 *         description: Danh sách trẻ em
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/Child'
 *       401:
 *         description: Không có quyền truy cập
 */
router.get('/', auth, childController.getChildren);

module.exports = router;