/* eslint-disable */
const {
  createUser,
  getAllUsers,
  getUserByEmail,
  getUserById,
  updateUser,
  deleteUser,
  findOneUser,
} = require('./users.services');

const crypto=require('crypto');
const { sendMailSendGrid } =require('../../utils/emails');
const { signToken } = require('../../auth/auth.service');

async function handlerCreateUser(req, res) {
  const newUser = req.body;
  try {
    const hash=crypto.createHash('sha256')
    .update(newUser.email)
    .digest('hex');
    newUser.passwordResetToken=hash;
    newUser.passwordResetExpires=Date.now()+3600000*24;

    const user = await createUser(newUser);
    console.log(user.email);
    const data={
      from:'"no-reply" <parkingappsince2022@gmail.com>',
      to: user.email,
      subject: 'Active your account template',
      template_id: 'd-dc043ce4c5df454fb0d9395636b058ea',
      dynamic_template_data:{
        firstName:user.firstName,
        lastName:user.lastName,
        url:`http://localhost:3000/activate/${hash}`
      },
    };

    await sendMailSendGrid(data);

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
  const { id } = req.params;
  const newInfo=req.body;
  const user = await updateUser(id,newInfo);

  if (!user) {
    return res.status(404);
  }

  return res.status(200).json(user);
}

async function handlerDeleteUser(req, res) {
  const { id } = req.params;
  console.log('Id enviado es ',id);
  const user = await deleteUser(id);

  if (!user) {
    return res.status(404);
  }

  return res.status(200).json({message:'Usuario fue eliminado...!'});
}

async function handlerVerifyAccount(req, res) {
  const {token} = req.params;
  try {
    const user = await findOneUser({passwordResetToken:token});
    if(!user) {
      return res.status(400).json({message:'Invalid token'});
    }
    if(Date.now()> user.passwordResetExpires){
      return res.status(400).json({message:'Token expired'});
    }
    user.isActivate = true;
    user.passwordResetToken = null;
    user.passwordResetExpires = null;

    await user.save();

    const jwtToken = signToken(user.profile);
    return res.status(200).json({message:'Account verified',token:jwtToken});
  } catch (error) {
    return res.status(400).json(error);
  }
}

module.exports = {
  handlerCreateUser,
  handlerGetAllUsers,
  handlerGetUserByEmail,
  handlerGetOneUser,
  handlerUpdateUser,
  handlerDeleteUser,
  handlerVerifyAccount,
};
