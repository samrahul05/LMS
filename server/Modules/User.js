
  
const { Sequelize, DataTypes } = require('sequelize');

const sequelize = new Sequelize({
  dialect: 'mysql',
  host: 'sql6.freesqldatabase.com',
  username: 'sql6687040',
  password: 'GV54mSR2P6',
  database: 'sql6687040',
  port:3306
});

const User = sequelize.define('SAM_SLMS', {
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    emailOrPhone: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false,
    }
},{
        tableName: 'SAM_SLMS', // Explicitly specify the table name here
      },
  );


  module.exports = User;



