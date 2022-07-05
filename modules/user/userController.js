const { Pool, Client } = require('pg')
var pg = require('pg');
const { pgConnection } = require('../../config/config')

var client = new pg.Client(pgConnection);
client.connect();


const login = async (req, res) => {
    const { email, password } = req.body;
    try {
        let query = `SELECT * from survey.user_details where email='${email}' and password='${password}'`;

        const result = await client.query(query);

        if (result.rowCount === 0) {
            return res.send("Invalid user");
        }
        return res.send("Valid user");
    } catch (error) {
        console.log("error", error);
        throw error;
    }
}

const createUser = async (req, res) => {
    const { email, password, fullName, dataOfBirth, createdBy } = req.body;
    try {

        var client = new pg.Client(pgConnection);
        client.connect();
        const inserQuery = `INSERT into survey.user_details
            (email,password,full_name,date_of_birth,created_by,created_at)values
            ('${email}','${password}','${fullName}','${dataOfBirth}','${createdBy}',now())`


        const result = await client.query(inserQuery);
        if(result.rowCount === 1){
            return res.send("Sign up successful");
        }
        return res.send("Something went wrong");

    } catch (error) {
        console.log("error", error);
        throw error;
    }
}

module.exports = {
    login,
    createUser
};
