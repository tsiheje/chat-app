const Users = require('../Models/Users');

const CreateUsers = (req, res) => {
    const {email, name, firstname, password} = req.body;
    Users.create(email, name, firstname, password, (err, results) => {
        if (err) return res.status(500).send(err);
        res.send(results);
    });
};

const getAllUsers = (req, res) => {
    console.log('ato')
    Users.getAll((err, results) => {
        if (err) return res.status(500).send(err);
        res.send(results);
    });
};

module.exports = {
    CreateUsers,
    getAllUsers,
}