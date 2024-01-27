const getEmployeesList = async () => {
    return mockDataEmployees;
}

const getEmployee = async (id) => {
    return mockDataEmployees.find((employee) => employee.id === id);
}


module.exports = {getEmployeesList, getEmployee};

// TODO: Remove after mongo init
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