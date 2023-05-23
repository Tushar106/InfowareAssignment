const connect=require('./connection');

 const update=async(req,res)=>{
    var employee_name=req.employee_name;
    var job_title=req.job_title;
    var phone_no=req.phone_no;
    var email=req.email;
    var address=req.address;
    var city=req.city;
    var state=req.state;
    var alternate_no=req.alternate_no;
    await connect.connect(function(err){
        if(err)res.status(400).send(err)
        var query=`UPDATE employee SET "employee_name"=${employee_name}, job_title=${job_title},phone_no=${phone_no},"email"=${email},address=${address},city=${city},state=${state},alternate_no=${alternate_no} Where('id'=${req.body.id})`
        connect.query(query,(err,result)=>{
            if(err)
            res.status(400).send(err);
            else 
            res.status(200).send("Successfull in Updating");
        })
    })

}
module.exports=update