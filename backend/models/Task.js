const mongoose = require('mongoose');

const TaskSchema = mongoose.Schema({
  description: {
    type: String,
    required: true,
    trim: true,
  },

  state: {
    type: Boolean,
    default: false,
  },

  creator: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
  },
});

module.exports = mongoose.model('Task', TaskSchema);
