const connect=require('./connection');

 const register=async(req,res)=>{
    var employee_name=req.body.employee_name;
    var job_title=req.body.job_title;
    var phone_no=req.body.phone_no;
    var email=req.body.email;
    var address=req.body.address;
    var city=req.body.city;
    var state=req.body.state;
    var alternate_no=req.body.alternate_no;
    
    connect.connect(function(err){
        // var query=`INSERT INTO employee ("employee_name", job_title,phone_no,"email",address,city,state,alternate_no) VALUES (${employee_name},${job_title},${phone_no},${email},${address},${city},${state},${alternate_no});`
        var query=`INSERT INTO \`employee\` (employee_name, job_title,phone,email,address,city,state,alternate_no) VALUES ?`
        var values=[[employee_name,job_title,`${phone_no}`,email,address,city,state,alternate_no]]
        connect.query(query,[values],(err,result)=>{
            if(err)
            res.status(400).send(err);
            else 
            res.status(200).send("Successfull in adding");
        })
    })

}
module.exports=register;