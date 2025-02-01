const Appointment = require('../models/Appointment');

// Đặt lịch hẹn
exports.createAppointment = async (req, res) => {
  try {
    const appointment = new Appointment(req.body);
    await appointment.save();
    res.status(201).json(appointment);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

// Lấy danh sách lịch hẹn
exports.getAppointments = async (req, res) => {
  try {
    const appointments = await Appointment.find().populate('childId vaccineId');
    res.status(200).json(appointments);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};