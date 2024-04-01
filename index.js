// Write your solution in this file!
let employee = {
    name : 'Ken',
    streetAddress : 'Ralph Road'
};

// create a function that update employee with key and value 

function updateEmployeeWithKeyAndValue(employee, key, value) {
    return {...employee, [key]: value};
}

// create a function that destructively update employee with key and value
function destructivelyUpdateEmployeeWithKeyAndValue(employee, key, value) {
    employee[key] = value;
    return employee;
}

// create a fucntion that deletes from employee by key
function deleteFromEmployeeByKey(employee, key) {
    const newEmployee = { ...employee };
    delete newEmployee[key];
    return newEmployee;
};

// create a function that destructively delete from employee by key 

function destructivelyDeleteFromEmployeeByKey(employee, key) {
    delete employee[key];
    return employee;
}