const { Op } = require("sequelize");
const { User, Mission, Plan } = require("../models");
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
        return res
          .response({
            status: "error",
            messsage: "username telah digunakan",
          })
          .code(202);
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
          where: { username: username },
          include: { all: true, nested: true },
        });
        const isValid = await Bcrypt.compare(password, user.password);
        return isValid
          ? res
              .response({
                status: "success",
                messsage: "Anda berhasil login",
                user,
              })
              .code(200)
          : res
              .response({
                status: "fail",
                messsage: "Kombinasi Username atau Password salah",
              })
              .code(202);
      } catch (error) {
        return res
          .response({
            status: "error",
            messsage: "Data user tidak ditemukan",
          })
          .code(202);
      }
    },
  },
  {
    method: "GET",
    path: "/users",
    handler: async (req, res) => {
      try {
        return await User.findAll();
      } catch (error) {
        return res
          .response({
            status: "error",
            messsage: error,
          })
          .code(202);
      }
    },
  },
  {
    method: "GET",
    path: "/users/{id}",
    handler: async (req, res) => {
      const { id } = req.params;
      try {
        return await User.findByPk(id, {
          include: { all: true, nested: true },
        });
      } catch (error) {
        return res
          .response({
            status: "error",
            messsage: error,
          })
          .code(202);
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
        return res
          .response({
            status: "error",
            messsage: error,
          })
          .code(202);
      }
    },
  },
  {
    method: "GET",
    path: "/users/{userId}/plans/{planId}",
    handler: async (req, res) => {
      const { userId, planId } = req.params;
      try {
        return await Plan.findByPk(planId, {
          where: { userId: userId },
          include: [User, Mission],
        });
      } catch (error) {
        return res
          .response({
            status: "error",
            messsage: error,
          })
          .code(202);
      }
    },
  },
  {
    method: "POST",
    path: "/users/{userId}/plans",
    handler: async (req, res) => {
      const { userId } = req.params;
      const { id, name, category, description, missions, status } = req.payload;
      try {
        result = await Plan.create(
          {
            name: name,
            description: description,
            category: category,
            userId: userId,
            status: false,
          },
          {
            include: User,
          }
        );
        for await (const item of missions) {
          await Mission.create(
            {
              name: item.name,
              long: item.long,
              lat: item.lat,
              status: item.status,
              planId: result.id,
              userId: userId,
            },
            { include: [Plan, User] }
          );
        }
        return res
          .response({
            status: "success",
            messsage: "berhasil menambahkan plan",
          })
          .code(200);
      } catch (error) {
        return res
          .response({
            status: "error",
            messsage: error,
          })
          .code(202);
      }
    },
  },
    // https://jelajah-back-end.izier.repl.co/users/3/missions
    // {"id": 2}
  {
    method: "POST",
    path: "/users/{userId}/missions",
    handler: async (req, res) => {
      const { userId } = req.params;
      const { id, planId, name, long, lat, status } = req.payload;
      try {
        const result = await Mission.update(
          { status: true },
          { where: { id: id } }
        );
        mission = await Mission.findByPk(id)
        plans = await Plan.findByPk(mission.planId, {include: Mission})
        if (plans.missions.map((e)=> e.status == true).length === plans.missions.length) {
          plans.status = true
          plans.save()
        }
        await User.increment({ points: 250 }, { where: { id: userId } });
        return result;
      } catch (error) {
        return res
          .response({
            status: "error",
            messsage: error,
          })
          .code(202);
      }
    },
  },
  {
    method: "POST",
    path: "/users/{userId}/missions/{missionId}/image",
    options: {
      payload: {
        multipart: true,
      },
    },
    handler: async (req, res) => {
      try {
        const { image } = req.payload;
        const { missionId, userId } = req.params;
        await handleImageUpload(
          image,
          "user_" + userId + "missions_" + missionId
        );
        return res
          .response({
            status: "success",
            messsage: "berhasil menambahkan foto",
          })
          .code(200);
      } catch (error) {
        console.log(error);
        return res
          .response({
            status: "error",
            messsage: error,
          })
          .code(202);
      }
    },
  },
];
