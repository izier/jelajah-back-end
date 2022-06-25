const { Sequelize } = require("sequelize");

const database = new Sequelize({
  dialect: "sqlite",
  storage: "database.db",
});

const ImageModel = database.define("image", {
  id: {
    type: Sequelize.INTEGER,
    autoIncrement: true,
    primaryKey: true,
  },
  url: {
    type: Sequelize.STRING,
    allowNull: false,
  },
});

const City = database.define("city", {
  id: {
    type: Sequelize.INTEGER,
    autoIncrement: true,
    primaryKey: true,
  },
  name: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  description: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  imageUrl: {
    type: Sequelize.STRING,
  },
});

const Place = database.define("place", {
  id: {
    type: Sequelize.INTEGER,
    autoIncrement: true,
    primaryKey: true,
  },
  name: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  description: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  rating: {
    type: Sequelize.FLOAT,
    allowNull: false,
  },
});

const Plan = database.define("plan", {
  id: {
    type: Sequelize.INTEGER,
    autoIncrement: true,
    primaryKey: true,
  },
  name: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  description: {
    type: Sequelize.STRING,
    allowNull: false,
  },
});

const Mission = database.define("mission", {
  id: {
    type: Sequelize.INTEGER,
    autoIncrement: true,
    primaryKey: true,
  },
  name: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  long: {
    type: Sequelize.FLOAT,
    allowNull: false,
  },
  lat: {
    type: Sequelize.FLOAT,
    allowNull: false,
  },
});

const User = database.define("user", {
  id: {
    type: Sequelize.INTEGER,
    autoIncrement: true,
    primaryKey: true,
  },
  name: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  username: {
    type: Sequelize.STRING,
    unique: true,
    allowNull: false,
  },
  password: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  points: {
    type: Sequelize.INTEGER,
    defaultValue: 0,
  },
});

const UserPlan = database.define("user_plan", {
  id: {
    type: Sequelize.INTEGER,
    autoIncrement: true,
    primaryKey: true,
  },
  planId: {
    type: Sequelize.INTEGER,
    allowNull: false,
  }
});


const UserMission = database.define("user_mission", {
  id: {
    type: Sequelize.INTEGER,
    autoIncrement: true,
    primaryKey: true,
  },
  long: {
    type: Sequelize.FLOAT,
    allowNull: false,
  },
  lat: {
    type: Sequelize.FLOAT,
    allowNull: false,
  },
  image: {
    type: Sequelize.STRING,
  },
});

City.hasMany(Place);
Place.belongsTo(City);


Place.hasMany(Plan);
Plan.belongsTo(Place);

Place.hasMany(ImageModel);
ImageModel.belongsTo(Place);

Plan.hasMany(Mission);
Mission.belongsTo(Plan);

User.hasMany(UserPlan);
UserPlan.belongsTo(User);

UserPlan.hasMany(Mission);
UserMission.belongsTo(UserPlan);

module.exports = {
  database,
  ImageModel,
  City,
  Place,
  Plan,
  Mission,
  User,
  UserPlan,
  UserMission,
};
