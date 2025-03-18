const employees = [
      { id: 1, name: 'John Doe', age: 30, department: 'IT', salary: 50000, specialization: 'JavaScript' },
      { id: 2, name: 'Alice Smith', age: 28, department: 'HR', salary: 45000, specialization: 'TypeScript' },
      { id: 3, name: 'Bob Johnson', age: 35, department: 'Finance', salary: 60000, specialization: 'Java' },
      //... Se pueden añadir más registros de empleados aquí
];

// Función para mostrar todos los empleados
function displayEmployees(){
    const totalEmployees = employees.map((employee, index) => `<p>${employee.id}: ${employee.name}: ${employee.name} - ${employee.department} - $${employee.salary}</p>`).join('');
    document.getElementById('employeesDetails').innerHTML = totalEmployees;
}

/* 
El método reduce itera a través de cada empleado y acumula sus salarios para calcular el total. El valor inicial del acumulador (acc) es 0.
El método reduce acumula continuamente estos salarios sumando el salario de cada empleado al total anterior.
El salario de cada empleado (employee.salary) se suma al acumulador (acc).
Después de calcular la suma total de los salarios, se activa un cuadro de diálogo de alerta usando alert().
Muestra los salarios totales calculados con el mensaje “Total Salaries: $” seguido del valor de la variable totalSalaries calculada.
Esta alerta muestra la suma total de todos los salarios de los empleados.
*/
function calculateTotalSalaries() {
    const totalSalaries = employees.reduce((acc, employee) => acc + employee.salary, 0);
    alert(`Total Salaries: $${totalSalaries}`);
}


/*
El código anterior filtra el array de empleados utilizando el método filter, aislando y recopilando empleados
cuyo propiedad de departamento coincide con ‘HR’ en un nuevo array llamado hrEmployees.
Luego muestra los detalles coincidentes en la página principal como se muestra en la función displayEmployees
usando el método map dentro del <div> utilizando su ID employeesDetails.
*/
function displayHREmployees() {
    const hrEmployees = employees.filter(employee => employee.department === 'HR');
    const hrEmployeesDisplay = hrEmployees.map((employee, index) => `<p>${employee.id}: ${employee.name}: ${employee.name} - ${employee.department} - $${employee.salary}</p>`).join('');
    document.getElementById('employeesDetails').innerHTML = hrEmployeesDisplay;
}


/*
Este código utiliza el método find para localizar un empleado en el array de empleados cuyo ID coincide con el ID de empleado proporcionado,
almacenando el objeto del empleado encontrado en la variable foundEmployee.
Se emplea una declaración if para ver si se encuentran los detalles para ese ID en particular y mostrar los detalles en consecuencia.
*/
function findEmployeeById(employeeId) {
    const foundEmployee = employees.find(employee => employee.id === employeeId);
    if (foundEmployee) {
    document.getElementById('employeesDetails').innerHTML =`<p>${foundEmployee.id}: ${foundEmployee.name}: ${foundEmployee.name} - ${foundEmployee.department} - $${foundEmployee.salary}</p>`;
    }
    else{
      document.getElementById('employeesDetails').innerHTML = 'no se ha encontrado ningún empleado con este ID';
    }
}

/*
TAREA PRÁCTICA. LOCALIZAR EMPLEADO CON ESPECIALIZACIÓN JAVASCRIPT
*/
function findEmployeeBySpec(employeeSpec){
    const foundEmployeebySpec = employees.find(employee => employee.specialization === employeeSpec);
    if (foundEmployeebySpec) {
        document.getElementById('employeesDetails').innerHTML =`<p>${foundEmployeebySpec.id}: ${foundEmployeebySpec.name}: ${foundEmployeebySpec.name} - ${foundEmployeebySpec.department} - $${foundEmployeebySpec.salary} - ${foundEmployeebySpec.specialization}</p>`;
    }
    else{
          document.getElementById('employeesDetails').innerHTML = 'no se ha encontrado ningún empleado con esta especialización';
    }
}