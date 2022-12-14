const {Router} = require('express')
const {
    getUser,
    getUsers,
    createUser,
    updateUser,
    deleteUser
} = require('../controllers/user.controller')
const router = Router()


router.post('/', createUser)

router.get('/:id', getUser)

router.get('/', getUsers)

router.put('/:id', updateUser)

router.delete('/:id', deleteUser)

module.exports = router