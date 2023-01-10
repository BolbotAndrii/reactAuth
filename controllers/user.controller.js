const User = require('../models/user.model')


const getUser = async (req, res) => {
    try {
        const user = await User.findById(req.params.id)
        res.status(200).json( user )
    } catch (e) {
        res.status(500).json({ message: 'Server error: ' + e })
    }
}

const getUsers = async (req, res) => {
    try {
        const users = await User.find()
        res.status(200).json(users)
    } catch (e) {
        res.status(500).json({ message: 'Server error: ' + e })
    }
}


const createUser = async (req, res) => {
    try {
        const { name, email, phone, password, group, created } = req.body
        const user = await new User( { name, email, phone, password, group, created  } )


        const createdUser = await user.save()
        if (createdUser) {
            res.status( 201 ).json( { message: 'User was successfully created' } )
        }
    } catch (e) {
        res.status(500).json({ message: 'Server error: ' + e })
    }
}


const updateUser = async (req, res) => {
    try {
        const user = await User.findOne({email})
        res.status(200).json({user})
    } catch (e) {
        res.status(500).json({ message: 'Server error: ' + e })
    }
}


const deleteUser = async (req, res) => {
    try {
        const user = await User.findOneAndDelete({})
        res.status(200).json({user})
    } catch (e) {
        res.status(500).json({ message: 'Server error: ' + e })
    }
}


module.exports = {
    getUser,
    getUsers,
    createUser,
    updateUser,
    deleteUser
}