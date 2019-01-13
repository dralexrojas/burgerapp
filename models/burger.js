module.exports = function(sequelize, DataTypes) {
  var Burger = sequelize.define("Burger", {
    burger_name: {
      type: DataTypes.STRING,
      validate: { len: [3, 100] }
    },
    devoured: {
      type: DataTypes.BOOLEAN,
      defaultValue: false
    }
  },
    { timestamps: false 
  });
return Burger;
};