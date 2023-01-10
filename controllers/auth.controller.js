const User = require('../models/user.model')


const loginUser = async (req, res) => {
    try {
        const auth = await User.findOne({ email })
        res.status(200).json({auth})
    } catch (e) {
        res.status(500).json({message: 'Server error: ' + e})
    }
}

module.exports = {
    loginUser
}