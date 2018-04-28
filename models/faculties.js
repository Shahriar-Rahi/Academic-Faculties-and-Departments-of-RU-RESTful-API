const mongoose = require('mongoose');

const facultySchema = mongoose.Schema({
	name:{
		type: String,
		required: true
	},
	number:{
		type: Number,
		required: true
	}
});

const Faculty = module.exports = mongoose.model('Faculty', facultySchema);

module.exports.getFaculties = (callback, limit) => {
	Faculty.find(callback).limit(limit);
}

module.exports.addFaculty = (faculty, callback) => {
	Faculty.create(faculty, callback);
}

module.exports.updateFaculty = (number, faculty, options, callback) => {
	var query = {number: number};
	var update = {
		name: faculty.name
	}
	Faculty.findOneAndUpdate(query, update, options, callback);
}

module.exports.removeFaculty = (number, callback) => {
	var query = {number: number};
	Faculty.remove(query, callback);
}
