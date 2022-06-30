const { User, Mission, Plan } = require("../models");
const Bcrypt = require("bcrypt");


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
        const user = await User.findOne({ where: { username: username } });
        const isValid = await Bcrypt.compare(password, user.password);
        return isValid
          ? res.response({
            status: "success",
            messsage: "Anda berhasil login",
            user,
          }).code(200)
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
        return await User.findAll()
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
        return await User.findByPk(id, { include: Plan });
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
    path: "/users/{id}/plans",
    handler: async (req, res) => {
      const { id } = req.params;
      try {
        return await Plan.findAll({
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
    method: "GET",
    path: "/users/{userId}/plans/{planId}",
    handler: async (req, res) => {
      const { userId, planId } = req.params;
      try {
        return await Plan.findByPk(planId,
          {
            where: { userId: userId },
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
    path: "/users/{userId}/plans",
    handler: async (req, res) => {
      const { userId, planId } = req.params;
      const { id, name, description } = req.payload;
      try {
        return await Plan.create({
          id: id,
          name: name,
          description: description,
          userId: userId,
        }, { include: User })
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
    path: "/users/{userId}/missions",
    handler: async (req, res) => {
      const { userId } = req.params;
      const { id, planId, name, long, lat } = req.payload;
      try {
        return await Mission.create({
          id: id,
          name: name,
          long: long,
          lat: lat,
          planId: planId,
          userId: userId,
        }, { include: [Plan, User] })
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
    path: "/users/{userId}/missions/{missionId}/image",
    options: {
      payload: {
        multipart: true,
      }
    },
    handler: async (req, res) => {
      try {
        const { image } = req.payload
        const { missionId } = req.params;
        const response = await handleImageUpload(image, "cities_" + id)
        await Mission.update({ imageUrl: response }, {
          where: {
            id: missionId,
            userId: userId
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
