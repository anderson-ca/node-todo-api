const monggose = require('mongoose');

let Todo = mongoose.model('Todo', { // schema
  text: {
    type: String,
    required: true,
    minLength: 1,
    trim: true
  },
  complete: {
    type: Boolean,
    default: false
  },
  completedAt: {
    type: Number,
    default: null
  }
});
