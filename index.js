const grpc = require('grpc');

const proto = grpc.load('message.proto');
const server = new grpc.Server();

server.addService(proto.work_leave.EmployeeLeaveDaysService.service ,{


  EligibleForLeave(call,callback){

    if(call.request.accrued_leave_days > 0 &&
          call.request.accrued_leave_days > call.request.requested_leave_days) {
            callback(null,  { eligible : true});
          } else {
            callback(null, { eligible : false }) ;
          }

  },

   grantLeave(call, callback) {
     if(call.reuest.employe_id == 1) {
        callback(null, { granted : true });
     } else{
       callback(null, { granted : false }) ;
     }
   }
});


server.bind('0.0.0.0:3466', grpc.ServerCredentials.createInsecure());

//Start the server
server.start();
console.log('grpc server running on port:', '0.0.0.0:3466');
