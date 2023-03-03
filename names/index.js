let firstNameLastName = require("../country/state/city/index");
let firstName = require("../utilities/utils/index");

const getPeopleInCity = (firstNameLastName) => {
  return firstName(firstNameLastName);
};

module.exports = getPeopleInCity;
