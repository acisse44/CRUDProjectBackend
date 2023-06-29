const Student = require("./studentModel.js");
const Campus = require("./campusModel.js");


// Our Associations: One to One (1:1) & Many to Many (M:N)
Student.hasOne(Campus);//, { through: "ShopperShoes" });
Campus.hasMany(Student);//, { through: "ShopperShoes" });


module.exports = {
  Student,
  Campus,
};
