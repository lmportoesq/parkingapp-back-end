/* eslint-disable */
const { Router } = require('express');
const { isAuthenticated, hasRole } = require('../../auth/auth.service');

const {
  handlerCreateUser,
  handlerGetAllUsers,
  handlerGetOneUser,
  handlerUpdateUser,
  handlerDeleteUser,
} = require('./users.controller');

const router = Router();
router.post('/', isAuthenticated(),handlerCreateUser);
router.get('/', handlerGetAllUsers);
router.get('/:id', handlerGetOneUser);
router.patch('/:id', handlerUpdateUser);
router.delete('/:id',hasRole(['admin']), handlerDeleteUser);
module.exports = router;
