module.exports = function(sequelize, DataTypes) {
  var Restaurant = sequelize.define("Restaurant", {
    name: DataTypes.STRING,
    link: DataTypes.STRING,
    location: DataTypes.STRING
  });

Restaurant.associate = function(models){
  Restaurant.belongsTo(models.User,{
    //this is the problem. Maybe UserId has to be an object? foreignKey: {UserId: Usersid}
    foreignKey:{
      allowNull: false
    }
  })
}
  return Restaurant;
}
