const Student = require("./student.js");
const Campus = require("./campus.js");


// Our Associations: one-to-many
Campus.hasMany(Student, { foreignKey: "campusId" });
Student.belongsTo(Campus, { foreignKey: "campusId" });

module.exports = {
  
  Student,
  Campus,
};
