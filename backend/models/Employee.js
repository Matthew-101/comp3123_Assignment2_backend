const mongoose = require('mongoose');

const EmployeeSchema = new mongoose.Schema({
  name: { type: String, required: true },
  position: { type: String, required: true },
  department: { type: String },
  salary: { type: Number },
  dateOfJoining: { type: Date, default: Date.now },
});

module.exports = mongoose.model('Employee', EmployeeSchema);
