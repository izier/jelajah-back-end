const users = require('../objects/users');
const bcrypt = require('bcrypt');

const addUserHandler = (request, h) => {
  const {fullname, username, password} = request.payload;
  const createdAt = new Date().toISOString();
  const updatedAt = createdAt;
  const plans = [];
  const exp = 0;
  const level = 0;

  if (confirmPassword === password) {
    const salt = bcrypt.genSalt(10);
    password = bcrypt.hash(password, salt);
    const newUser = {
      fullname, username, password, createdAt, updatedAt, plans, exp, level,
    };
    users.push(newUser);
  }

  const isSuccess =
    users.filter((user) => user.username === username).length > 0;

  if (isSuccess) {
    const response = h.response({
      status: 'success',
      message: 'User berhasil ditambahkan',
      data: {
        username: username,
      },
    });
    response.code(201);
    return response;
  }

  const response = h.response({
    status: 'fail',
    message: 'User gagal ditambahkan',
  });
  response.code(500);
  return response;
};

const getUserByUsernameHandler = (request, h) => {
  const {username} = request.params;

  const user = users.filter((user) => user.username === username)[0];

  if (user !== undefined) {
    return {
      status: 'success',
      data: {
        user,
      },
    };
  }

  const response = h.response({
    status: 'fail',
    message: 'User tidak ditemukan',
  });
  response.code(404);
  return response;
};

module.exports = {
  addUserHandler,
  getUserByUsernameHandler,
};
