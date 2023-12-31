const express = require('express');
const {RESULT_CODES, RESULT_STATUSES} = require('../../contsants');
const router = express.Router();

router.get('/get-employees', (req, res) => {
    return res.status(200).json({
        resultCode: RESULT_CODES.SUCCESS,
        resultStatus: RESULT_STATUSES.SUCCESS,
        message: 'Retrieve list of employees',
        data: {employeesList: mockDataEmployees},
    });
});

router.get('/get-employee/:id', (req, res) => {
    const {id} = req.params;
    return res.status(200).json({
        resultCode: RESULT_CODES.SUCCESS,
        resultStatus: RESULT_STATUSES.SUCCESS,
        message: 'Retrieve list of employees',
        data: {employee: mockDataEmployees.find((employee) => employee.id === id)},
    });
});

router.post('/add-employees', (req, res) => {
    console.log('Request Body - ', req.body);
    res.send('TODO: Add multiple employees');
});

router.post('/add-employee', (req, res) => {
    console.log('Request Body - ', req.body);
    res.send('TODO: Add employee');
});

module.exports = router;


const mockDataEmployees = [
    {
        id: '1',
        name: 'John Doe',
        position: 'Developer',
    },
    {
        id: '2',
        name: 'Jane Smith',
        position: 'Designer',
    },
    {
        id: '3',
        name: 'Bob Johnson',
        position: 'Manager',
    },
    {
        id: '4',
        name: 'Alice Brown',
        position: 'HR Specialist',
    },
];
