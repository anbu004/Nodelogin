var mongoose = require('mongoose');

module.exports = mongoose.model('Student', {
	name: {
		type: String,
	default: ''
	},
	phone: {
		type: String,
	default: ''
	},
	amount: {
		type: String,
	default: ''
	}
});
