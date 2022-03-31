/* eslint-disable */
const {
  createUser,
  getAllUsers,
  getUserByEmail,
  getUserById,
  updateUser,
  deleteUser,
} = require('./users.services');

async function handlerCreateUser(req, res) {
  const newUser = req.body;
  try {
    const user = await createUser(newUser);

    res.status(201).json(user);
  } catch (error) {
    res.status(500).json(error);
  }
}

async function handlerGetAllUsers(req, res) {
  const users = await getAllUsers();

  res.status(201).json(users);
}

async function handlerGetUserByEmail(req, res) {
  const { email } = req.body;
  const user = getUserByEmail(email);

  if (!user) {
    return res.status(404);
  }

  return res.status(200).json(user);
}

async function handlerGetOneUser(req, res) {
  const { id } = req.params;
  try {
    const user = await getUserById(id);
    res.status(201).json(user);
  } catch (err) {
    res.status(400).json(err);
  }
}

async function handlerUpdateUser(req, res) {
  const { id } = req.body;
  const user = await updateUser(id);
  console.log('Usuario retornado es ',user)
  if (!user) {
    return res.status(404);
  }

  return res.status(200).json(user);
}

async function handlerDeleteUser(req, res) {
  const { id } = req.body;
  console.log('Id enviado es ',id);
  const user = await deleteUser(id);

  if (!user) {
    return res.status(404);
  }

  return res.status(200).json({message:'Usuario fue eliminado...!'});
}

module.exports = {
  handlerCreateUser,
  handlerGetAllUsers,
  handlerGetUserByEmail,
  handlerGetOneUser,
  handlerUpdateUser,
  handlerDeleteUser,
};
