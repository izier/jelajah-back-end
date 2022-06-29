const { User, UserMission, Mission } = require("../models");
const Bcrypt = require("bcrypt");
const handleImageUpload = require("../utils/upload");

module.exports = [
  {
    method: "POST",
    path: "/register",
    handler: async (req, res) => {
      const { fullname, username, password } = req.payload;
      try {
        await User.create({
          fullname: fullname,
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
        }).code(202);
      }
    },
  },
  {
    method: "POST",
    path: "/login",
    handler: async (req, res) => {
      const { username, password } = req.payload;
      try {
        const user = await User.findOne({
          attributes: [
            "id",
            "fullname",
            "username",
            "password",
            "points",
          ]
        }, { where: { username: username } });
        const isValid = await Bcrypt.compare(password, user.password);
        return isValid
          ? res.response({
            status: "success",
            messsage: "Anda berhasil login",
            user,
          }).code(202)
          : res.response({
            status: "fail",
            messsage: "Kombinasi Username atau Password salah",
          }).code(202);
      } catch (error) {
        return res.response({
          status: "error",
          messsage: error,
        }).code(202);
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
            "fullname",
            "username",
            "password",
            "points"
          ]
        })
      } catch (error) {
        return res.response({
          status: "error",
          messsage: error,
        }).code(202);
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
            "fullname",
            "username",
            "password",
            "points",
          ],
        }).code(202);
      } catch (error) {
        return res.response({
          status: "error",
          messsage: error,
        }).code(202);
      }
    },
  },
  {
    method: "GET",
    path: "/users/{id}/missions",
    handler: async (req, res) => {
      const { id } = req.params;
      try {
        return await UserMission.findAll({
          where: { userId: id },
          include: [User, Mission],
        });
      } catch (error) {
        return res.response({
          status: "error",
          messsage: error,
        }).code(202);
      }
    },
  },
  {
    method: "POST",
    path: "/users/{user_id}/missions/{mission_id}",
    handler: async (req, res) => {
      const { user_id, mission_id } = req.params;
      const { long, lat } = req.payload;

      try {
        return await UserMission.create({
          userId: user_id,
          missionId: mission_id,
          long: long,
          lat: lat,
          include: [User, Mission],
        });
      } catch (error) {
        return res.response({
          status: "error",
          messsage: error,
        }).code(202);
      }
    },
  },
  {
    method: "POST",
    path: "/users/{user_id}/missions/{mission_id}/image",
    options: {
      payload: {
        multipart: true,
      }
    },
    handler: async (req, res) => {
      try {
        const { image } = req.payload
        const { id } = req.params;
        const response = await handleImageUpload(image, "cities_" + id)
        await UserMission.update({ imageUrl: response }, {
          where: {
            id: id
          }
        })
        return {
          status: "success",
          messsage: "upload image berhasil",
        }
      } catch (error) {
        console.log(error)
        return res.response({
          status: "error",
          messsage: error,
        }).code(202);
      }
    },
  },
];
