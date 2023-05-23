const connect=require('./connection');
const delete_employee=async(req,res)=>{
    await connect.connect(function(err){
        if(err)res.status(400).send(err)
        var query=`DELETE FROM \`employee\` WHERE (\`id\`='${req.body.id}' )`;
        connect.query(query,(err,result)=>{
            if (error) {
                console.error('Error executing query:', error);
                return;
            }
            res.status(200).send("Deleted Successfully")
        })
    })
}
module.exports=delete_employee;
