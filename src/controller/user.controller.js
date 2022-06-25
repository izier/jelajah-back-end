const { User, UserPlan, UserMission } = require("../models");
const Bcrypt = require("bcrypt");

module.exports = [
  {
    method: "POST",
    path: "/register",
    handler: async (req, res) => {
      const { name, username, password } = req.payload;
      try {
        await User.create({
          name: name,
          username: username,
          password: await Bcrypt.hash(password, 10),
        });
        return res.response({
          status: "success",
          messsage: "Berhasil mendaftarkan user",
        });
      } catch (error) {
        return res.response({
          status: "error",
          messsage: "username telah digunakan",
        });
      }
    },
  },
  {
    method: "POST",
    path: "/login",
    handler: async (req, res) => {
      const { username, password } = req.payload;
      try {
        const user = await User.findOne({ where: { username: username } });
        const isValid = await Bcrypt.compare(password, user.password);
        return isValid
          ? res.response({
            status: "success",
            messsage: "Anda berhasil login",
            user,
          })
          : res.response({
            status: "fail",
            messsage: "Kombinasi Username atau Password salah",
          });
      } catch (error) {
        return res.response({
          status: "error",
          messsage: error,
        });
      }
    },
  },
  {
    method: "GET",
    path: "/users",
    handler: async (req, res) => {
      try {
        return await User.findAll({
          attributes: [
            "id",
            "name",
            "username",
            "password",
            "points"
          ]
        })
      } catch (error) {
        return res.response({
          status: "error",
          messsage: error,
        });
      }
    },
  },
  {
    method: "GET",
    path: "/users/{id}",
    handler: async (req, res) => {
      const { id } = req.params;
      try {
        return await User.findByPk(
          id, {
          attributes: [
            "id",
            "name",
            "username",
            "password",
            "points",
          ],
        });
      } catch (error) {
        return res.response({
          status: "error",
          messsage: error,
        });
      }
    },
  },
  {
    method: "GET",
    path: "/users/{id}/plans",
    handler: async (req, res) => {
      const { id } = req.params;
      try {
        return await UserPlan.findOne({
          where: { userId: id },
          include: UserMission,
        });
      } catch (error) {
        return res.response({
          status: "error",
          messsage: error,
        });
      }
    },
  },
];
