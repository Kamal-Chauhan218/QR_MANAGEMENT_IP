const User = require("../models/userdata");

exports.getLogin = (req, res, next) => {
  res.render("auth/login", {
    path: "/login",
    pageTitle: "Login",
    isAuthenticated: false,
  });
};

exports.getSignup = (req, res, next) => {
  res.render("auth/signup", {
    path: "/signup",
    pageTitle: "Signup",
    isAuthenticated: false,
  });
};

exports.postLogin = (req, res, next) => {
  User.findById("5bab316ce0a7c75f783cb8a8")
    .then((user) => {
      req.session.isLoggedIn = true;
      req.session.user = user;
      req.session.save((err) => {
        console.log(err);
        res.redirect("/");
      });
    })
    .catch((err) => console.log(err));
};

exports.postSignup = (req, res, next) => {
  const email = req.body.email;
  const password = req.body.password;
  const firstName = req.body.firstName;
  const lastName = req.body.lastName;
  const RollNumber = req.body._id;
  const CurrentAddress = req.body.CurrentAddress;
  const City = req.body.City;
  const classNames = req.body.classNames;
  const Pincode = req.body.Pincode;
  const Age = req.body.Age;
  const Gender = req.body.Gender;
  const ContactNumber = req.body.ContactNumber;
  const FatherName = req.body.FatherName;
  const MotherName = req.body.MotherName;
  const ResidentialAddress = req.body.ResidentialAddress;
  const FatherNumber = req.body.FatherNumber;
  const MotherNumber = req.body.MotherNumber;
  const SchoolName = req.body.SchoolName;
  const SchoolNumber = req.body.SchoolNumber;
  const SchoolAddress = req.body.SchoolAddress;
  const PoliceStationName = req.body.PoliceStationName;
  const PoliceStationAddress = req.body.PoliceStationAddress;
  const BloodGroup = req.body.BloodGroup;
  User.findById({ _id: RollNumber })
    .then((userDoc) => {
      if (userDoc) {
          console.log(RollNumber);
        return;
      }
      
      const user = new User({
        email: email,
        password: password,
        firstName: firstName,
        lastName: lastName,
        _id: RollNumber,
        CurrentAddress: CurrentAddress,
        City: City,
        classNames: classNames,
        Pincode: Pincode,
        Age: Age,
        Gender: Gender,
        ContactNumber: ContactNumber,
        FatherName: FatherName,
        MotherName: MotherName,
        ResidentialAddress: ResidentialAddress,
        FatherNumber: FatherNumber,
        MotherNumber: MotherNumber,
        SchoolName: SchoolName,
        SchoolNumber: SchoolNumber,
        SchoolAddress: SchoolAddress,
        PoliceStationName: PoliceStationName,
        PoliceStationAddress: PoliceStationAddress,
        BloodGroup: BloodGroup,
      });
      console.log(user);
      return user.save();
    })
    .catch((err) => {
      console.log(err);
    });
};

exports.postLogout = (req, res, next) => {
  req.session.destroy((err) => {
    console.log(err);
    res.redirect("/");
  });   
};
