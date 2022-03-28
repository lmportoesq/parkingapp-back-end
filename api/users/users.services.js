const usersModel = require('./users.model');

function getAllUsers() {
  return usersModel.find();
}

async function getOneUser(id) {
  const user = await usersModel.findById(id);

  if (!user) {
    return null;
  }
  return user;
}

function deleteUser(id) {
  const user = usersModel.findByIdAndDelete(id);
  if (!user) {
    return null;
  }
  return user;
}

function createUser(newUser) {
  const user = usersModel.create(newUser);
  return user;
}

function updateUser(id, user) {
  return user;
}

module.exports = {
  getAllUsers,
  getOneUser,
  deleteUser,
  createUser,
  updateUser,
};
