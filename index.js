let employee = {};
employee.name();
employee.streetSddress();

function updateEmployeeWithKeyAndValue(employee, key, value) {
    return {...employee, [key]: value};
 }
function destructivelyUpdateEmployeeWithKeyAndValue(employee, key, value){
    employee[key] = value;
    return employee;
}
function deleteFromEmployeeByKey(employee, key) {
    const updateEmployee = {...employee};
    delete updateEmployee[key];
    return updateEmployee;
}
function destructivelyDeleteFromEmployeeByKey(employee, key){
    delete employee[key];
    return employee;
}