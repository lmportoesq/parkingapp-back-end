/* eslint-disable */
const { Router } = require('express');

const {
  handlerCreateUser,
  handlerGetAllUsers,
  handlerGetOneUser,
  handlerUpdateUser,
  handlerDeleteUser,
} = require('./users.controller');

const router = Router();
router.post('/', handlerCreateUser);
router.get('/', handlerGetAllUsers);
router.get('/:id', handlerGetOneUser);
router.patch('/:id', handlerUpdateUser);
router.delete('/:id', handlerDeleteUser);
module.exports = router;
