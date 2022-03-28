const { Router } = require('express');
const {
  handlerAllUsers,
  handlerOneUser,
  handlerDeleteUser,
  handlerCreateUser,
  handlerUpdateUser,
} = require('./users.contoller');

const router = Router();

router.get('/', handlerAllUsers);
router.get('/:id', handlerOneUser);
router.delete('/:id', handlerDeleteUser);
router.post('/', handlerCreateUser);
router.patch('/:id', handlerUpdateUser);

module.exports = router;
