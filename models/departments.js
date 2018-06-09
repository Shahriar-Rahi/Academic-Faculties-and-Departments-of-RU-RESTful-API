const mongoose = require('mongoose');

const departmentSchema = mongoose.Schema({
	name:{
		type: String,
		required: true
	},
	number:{
		type: Number,
		required: true
	}
});

const Department = module.exports = mongoose.model('Department', departmentSchema);

module.exports.getDepartments = (callback, limit) => {
	Department.find(callback).limit(limit);
}

module.exports.getDepartmentById = (number, callback) => {
	var query = {number: number};
	Department.findOne(query, callback);
}

module.exports.addDepartment = (department, callback) => {
	Department.create(department, callback);
}

module.exports.updateDepartment = (number, department, options, callback) => {
	var query = {number: number};
	var update = {
		name: department.name
	}
	Department.findOneAndUpdate(query, update, options, callback);
}

module.exports.removeBook = (number, callback) => {
	var query = {number: number};
	Department.remove(query, callback);
}
