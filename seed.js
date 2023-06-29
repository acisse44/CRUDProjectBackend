const db = require("./db");
const { studentModel, campusModel } = require("./db/models");

const Student = [
  {     firstName: "Henry", 
        lastName: "Danger", 
        imageURL: "https://static.wikia.nocookie.net/heroes-and-villain/images/9/98/Henry_Hart_%28Kid_Danger%29Image.jpg/revision/latest?cb=20201209152619", 
        email: "henry12@123.com", 
        gpa: 3.9 },

{       firstName: "Spider",   
        lastName: "Man",    
        imageURL: "https://insomniac.games/wp-content/uploads/2018/09/Spider-Man_PS4_Selfie_Photo_Mode_LEGAL.jpg", 
        email: "spider22@123.com", 
        gpa: 3.0 },

  {     firstName: "Black", 
        lastName: "Panther", 
        imageURL: "https://media.newyorker.com/photos/5a875e3f33aebd0cab9bab12/1:1/w_1079,h_1079,c_limit/Brody-Passionate-Politics-Black-Panther.jpg", 
        email: "wakanda1@123.com", 
        gpa: 4.0 },
];


const Campus = [
    {   name: "Brooklyn College", 
        imageUrl: "https://www.brooklyn.edu/wp-content/uploads/NEWS-Default-1-Featured.jpg",
        description: "Brooklyn College Campus", 
        address: "2900 Bedford Ave, Brooklyn, NY 11210" },

    {   name: "City College", 
        imageUrl: "https://www.harlemonestop.com/images/organizations/1542.jpg?v=1587326290",
        description: "City College Campus", 
        address: "160 Convent Ave, New York, NY 10031" },

     {  name: "Queens College", 
        imageUrl: "https://qns.com/wp-content/uploads/2020/11/twitter_sm-07.png",
        description: "Queens College Campus", 
        address: "65-30 Kissena Blvd, Queens, NY 11367" },

  ];
  const seed = async () => {
    await studentModel.bulkCreate(seedStudents);
    await campusModel.bulkCreate(seedCampuses);
  };
  
  seed().then(() => process.exit());