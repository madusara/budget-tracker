const expressAsyncHandler = require("express-async-handler");
const User = require("../../model/User");


const registerUser = expressAsyncHandler(
    async (req, res) => {
        const { email, firstname, lastname, password } = req && req.body;
        const userExists = await User.findOne({ email })
        if (userExists) throw new Error('User already exists');
        try {
            const userObject = await User.create({ email, firstname, lastname, password })
            res.status(200).json(userObject);
        } catch (error) {
            res.status(400).json(error.message);
        }
    }
)

const fetchUsers = expressAsyncHandler (
    async (req, res) => {
        try {
            const users = await User.find({});
            res.json(users)
        } catch (error) {
            res.status(400).json(error.message);
        }
    }
);

module.exports = { registerUser, fetchUsers };