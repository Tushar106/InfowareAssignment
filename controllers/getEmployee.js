const connect = require('./connection');
const getEmployee = async (req, res) => {
    connect.connect((err) => {
        if (err) res.status(500).send(err);
        const query = 'SELECT * FROM employee WHERE id = ?';
        const id = req.params.id; // Specify the ID of the row you want to retrieve

        // Execute the query
        connect.query(query, [id], (error, results) => {
            if (error) {
                console.error('Error executing query:', error);
                return;
            }

            if (results.length > 0) {
                const row = results[0];
                res.status(200).send(row)
            } else {
                res.status(500).send("Dont exist")
            }

            // Close the database connection
            connect.end();
        });

    })
}
module.exports = getEmployee;