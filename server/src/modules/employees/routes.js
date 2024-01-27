const express = require('express');
const {RESULT_CODES, RESULT_STATUSES} = require('../../contsants');
const router = express.Router();
const Joi = require('joi');
const validateRequest = require('../../validate-middleware');
const {getEmployeesList, getEmployee} = require('./controller');


router.get('/employees', async (req, res) => {
    try {
        const employeesList = await getEmployeesList();
        return res.status(200).json({
            resultCode: RESULT_CODES.SUCCESS,
            resultStatus: RESULT_STATUSES.SUCCESS,
            message: 'successfully retrieve list of employees',
            data: {employeesList},
        });
    } catch (e) {
        console.error(e);
        return res.status(500).json({
            resultCode: RESULT_CODES.ERROR,
            resultStatus: RESULT_STATUSES.ERROR,
            message: 'failed to retrieve list of employees',
            data: null,
        });
    }
});

router.get('/employee/:id',
    validateRequest({
        params: {
            id: Joi.number().integer().required(),
        },
    }),
    async (req, res) => {
        const {id} = req.params;
        try {
            const employee = await getEmployee(id);
            if (!employee) {
                return res.status(404).json({
                    resultCode: RESULT_CODES.WARNING,
                    resultStatus: RESULT_STATUSES.WARNING,
                    message: `Employee with id:${id} not found`,
                    data: null,
                });
            }
            return res.status(200).json({
                resultCode: RESULT_CODES.SUCCESS,
                resultStatus: RESULT_STATUSES.SUCCESS,
                message: 'Employee details retrieved successfully',
                data: {employee},
            });
        } catch (e) {
            return res.status(500).json({
                resultCode: RESULT_CODES.SUCCESS,
                resultStatus: RESULT_STATUSES.SUCCESS,
                message: `failed to retrieve employee with id:${id}: e.message`,
                data: null,
            });
        }
    });

router.post('/employees', (req, res) => {
    console.log('Request Body - ', req.body);
    res.send('TODO: Add multiple employees');
});

router.post('/employee', (req, res) => {
    console.log('Request Body - ', req.body);
    res.send('TODO: Add employee');
});

module.exports = router;
