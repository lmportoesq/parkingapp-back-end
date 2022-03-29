const {
  getAllUsers,
  getOneUser,
  deleteUser,
  createUser,
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

async function handlerAllUsers(req, res) {
  const users = await getAllUsers();
  res.json(users);
}

async function handlerOneUser(req, res) {
  const { id } = req.params.id;
  const user = await getOneUser(id);

  if (!user) {
    res.status(404).json({ message: `User not found with id ${id}` });
  } else {
    res.json(user);
  }
}

function handlerDeleteUser(req, res) {
  const { id } = req.params.id;
  const user = deleteUser(id);

  if (!user) {
    res.status(404).json({ message: `Task not found with id: ${id}, it was not delete` });
  } else {
    res.json(user);
  }
}

async function handlerUpdateUser(req, res) {
  const id = req.params.id;
  const { body } = req;
  const user = updateUser(id, body);
  if (!user) {
    res.status(404).json({ message: `User not found with id: ${id}` });
  } else {
    res.json(user);
}

module.exports = {
  handlerAllUsers,
  handlerOneUser,
  handlerDeleteUser,
  handlerCreateUser,
  handlerUpdateUser,
}
