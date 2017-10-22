const grpc = require('grpc');

const proto = grpc.load( { root : "./", file : "message.proto"});

const client = new proto.work_leave.EmployeeLeaveDaysService('localhost:3466', grpc.credentials.createInsecure());

  const employes = [
    {  employee_id : 1,  accrued_leave_days : 5 , requested_leave_days : 3},
    { employee_id : 5 , accrued_leave_days : 5 , requested_leave_days : 6}
];

employes.forEach( (emp) => {

  client.eligibleForLeave(emp, (err, resp) => {

    console.log("EMployee Id = " + emp.employee_id + " Response = " + JSON.stringify(resp));
  });


});
