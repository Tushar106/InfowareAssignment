
const connect = require('./connection');
const list = async (req, res) => {
    const perPage = 10;
    const currentPage = 1;

    // Calculate the offset
    const offset = (currentPage - 1) * perPage;


    await connect.connect(function (err) {
        if (err) res.status(400).send(err)
        // Construct the pagination query
        const query = `SELECT * FROM employee LIMIT ${perPage} OFFSET ${offset}`;

        // Execute the query

        connect.query(query, (error, results) => {
            if (error) {
                console.error('Error executing query:', error);
                return;
            }
            res.status(200).send(results)

            // Close the database connection
            connection.end();
        });
    })
}
module.exports=list;