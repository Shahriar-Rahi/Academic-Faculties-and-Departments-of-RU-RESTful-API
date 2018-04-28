const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

app.use(bodyParser.json());

Faculty =require('./models/faculties');
Department =require('./models/departments');

mongoose.connect('mongodb://localhost/rudb');
var db = mongoose.connection;

app.get('/', (req, res) => {
	res.send('Please use /api/departments and /api/faculties to know the name of faculties and departments respectively of Rajshahi Universtiy.\nRajshahi University has 9 faculties and 55 departments.\nTo know the information about faculties and departments use api/faculties/info and api/departments/info.\n');
});

app.get('/api/faculties', (req, res) => {
	Faculty.getFaculties((err, faculties) => {
		if(err){
			throw err;
		}
		res.json(faculties);
	});
});

app.post('/api/faculties', (req, res) => {
	var facutly = req.body;
	Faculty.addFaculty(facutly, (err, facutly) => {
		if(err){
			throw err;
		}
		res.json(facutly);
	});
});

app.put('/api/faculties/:number', (req, res) => {
	var number = req.params.number;
	var facutly = req.body;
	Faculty.updateFaculty(number, facutly, {}, (err, faculty) => {
		if(err){
			throw err;
		}
		res.json(faculty);
	});
});

app.delete('/api/faculties/:number', (req, res) => {
	var number = req.params.number;
	Faculty.removeFaculty(number, (err, faculty) => {
		if(err){
			throw err;
		}
		res.json(faculty);
	});
});

app.get('/api/departments', (req, res) => {
	Department.getDepartments((err, departments) => {
		if(err){
			throw err;
		}
		res.json(departments);
	});
});

app.get('/api/departments/:number', (req, res) => {
	Department.getDepartmentById(req.params.number, (err, department) => {
		if(err){
			throw err;
		}
		res.json(department);
	});
});

app.post('/api/departments', (req, res) => {
	var department = req.body;
	Department.addDepartment(department, (err, department) => {
		if(err){
			throw err;
		}
		res.json(department);
	});
});

app.put('/api/departments/:number', (req, res) => {
	var number = req.params.number;
	var department = req.body;
	Department.updateDepartment(id, department, {}, (err, department) => {
		if(err){
			throw err;
		}
		res.json(department);
	});
});

app.delete('/api/departments/:number', (req, res) => {
	var number = req.params.number;
	Department.removeDepartment(id, (err, department) => {
		if(err){
			throw err;
		}
		res.json(department);
	});
});

app.listen(3000);
console.log('Running on port 3000...');
