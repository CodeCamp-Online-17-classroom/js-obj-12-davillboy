// write code here
const employees = {
            john: { salary: 1000, address: { district: 'Ratchathewi', province: 'Bangkok' } },
            peter: { salary: 1500, address: { district: 'Pathumwan', province: 'Bangkok' } },
            mike: { salary: 800, address: { district: 'Pakkret', province: 'Nonthaburi' } },
            sarah: { salary: 2200, address: { district: 'Sriraja', province: 'Chonburi' } }
          };
          
          function findEmployee(name) {  
            name = name.toLowerCase();
            if (employees.hasOwnProperty(name)) {
              const employee = employees[name];
              const message = `Name: ${name}, salary: ${employee.salary}, address: ${employee.address.district}, 
              ${employee.address.province}`;
              console.log(message);
            } else {
              console.log("Not Found");
            }
          }
          findEmployee("john"); 
          findEmployee("peter"); 
          findEmployee("mike"); 
          findEmployee("sarah"); 
          findEmployee("mary"); 
          
    </script>
