const Student = require("./student.js");
const Campus = require("./campus.js");


// Our Associations: one-to-many
Campus.hasMany(Student);
Student.belongsTo(Campus);


module.exports = {
  
  Student,
  Campus,
};
