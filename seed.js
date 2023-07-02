const db = require("./db");
const { Student, Campus } = require("./db/models");

const seedCampuses = [
  {   
    name: "Brooklyn College", 
    imageUrl: "https://www.brooklyn.edu/wp-content/uploads/NEWS-Default-1-Featured.jpg",
    description: "Brooklyn College Campus", 
    address: "2900 Bedford Ave, Brooklyn, NY 11210" 
  },

  {   
    name: "City College", 
    imageUrl: "https://www.harlemonestop.com/images/organizations/1542.jpg?v=1587326290",
    description: "City College Campus", 
    address: "160 Convent Ave, New York, NY 10031" 
  },

 {  
    name: "Queens College", 
    imageUrl: "https://qns.com/wp-content/uploads/2020/11/twitter_sm-07.png",
    description: "Queens College Campus", 
    address: "65-30 Kissena Blvd, Queens, NY 11367" 
  },

];

const seedStudents = [
      { 
        firstName: "Henry", 
        lastName: "Danger", 
        imageUrl: "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse4.mm.bing.net%2Fth%3Fid%3DOIP.drNoWz_I5fraAz1voYt4cAHaEK%26pid%3DApi&f=1&ipt=f9ba176e780e0baeb236bc41028313135c21e8aba6953bf43039fe6511aec79d&ipo=images", 
        email: "henry12@123.com", 
        gpa: 3.9,
        campusId: 28,
      },

      {       
        firstName: "Spider",   
        lastName: "Man",    
        imageUrl: "https://insomniac.games/wp-content/uploads/2018/09/Spider-Man_PS4_Selfie_Photo_Mode_LEGAL.jpg", 
        email: "spider22@123.com", 
        gpa: 3.0,
        campusId: 29,

      },

      {     
        firstName: "Black", 
        lastName: "Panther", 
        imageUrl: "https://media.newyorker.com/photos/5a875e3f33aebd0cab9bab12/1:1/w_1079,h_1079,c_limit/Brody-Passionate-Politics-Black-Panther.jpg", 
        email: "wakanda1@123.com", 
        gpa: 4.0,
        campusId: 30,

      },
];
  
const seed = async () => {
    try {
      await Campus.bulkCreate(seedCampuses);
      await Student.bulkCreate(seedStudents);
      console.log("Seeding completed successfully.");
    } catch (error) {
      console.error("Seeding failed:", error);
    }
  };
  
seed().then(() => process.exit());