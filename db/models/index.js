const Student = require("./student.js");
const Campus = require("./campus.js");


// Our Associations: One to One (1:1) & Many to Many (M:N)
Student.hasOne(Campus);//, { through: "ShopperShoes" });
Campus.hasMany(Student);//, { through: "ShopperShoes" });


module.exports = {
  Student,
  Campus,
};
