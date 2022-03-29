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

function updateUser(id, user) {
  // eslint-disable-next-line no-shadow
  const oldUser = usersModel.find((user) => user.id === Number(id));

  if (!oldUser) {
    return null;
  }

  // eslint-disable-next-line no-shadow
  usersModel.forEach((oldUser) => {
    if (oldUser.id === Number(id)) {
      // eslint-disable-next-line no-param-reassign
      oldUser.email = user.email;
      // eslint-disable-next-line no-param-reassign
      oldUser.password = user.password;
    }
  });

  return user;
}

module.exports = {
  getAllUsers,
  getOneUser,
  deleteUser,
  createUser,
  updateUser,
};
