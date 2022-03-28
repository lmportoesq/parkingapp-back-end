const usersModel = require('./users.model');

function createUser(newUser) {
  const user = usersModel.create(newUser);
  return user;
}

function getAllUsers() {
  return usersModel.find({});
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

function updateUser(id) {
  const user = usersModel.findOneAndUpdate(id);
  if (!user) {
    return null;
  }
  return user;
}

module.exports = {
  getAllUsers,
  getOneUser,
  deleteUser,
  createUser,
  updateUser,
};
