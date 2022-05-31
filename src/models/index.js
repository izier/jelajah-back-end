const { Sequelize } = require("sequelize");

const database = new Sequelize({
  dialect: "sqlite",
  storage: "database.db",
});

const Image = database.define("image", {
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
});

City.hasMany(Place);
Place.belongsTo(City);

Place.hasMany(Plan);
Plan.belongsTo(Place);

Place.hasMany(Image);
Image.belongsTo(Place);

Plan.hasMany(Mission);
Mission.belongsTo(Plan);

User.hasMany(UserPlan);
UserPlan.belongsTo(User);

module.exports = {
  database,
  Image,
  City,
  Place,
  Plan,
  Mission,
  User,
  UserPlan,
};
