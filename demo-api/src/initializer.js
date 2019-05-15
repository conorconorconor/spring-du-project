const User = require("./models/user");

module.exports = function init(data) {
  for (let entry of data) {
    const newUser = new User({
      firstName: entry.firstName,
      lastName: entry.lastName
    });
    newUser.save((err, document) => {
      if (err) {
        console.log(err);
      } else {
        console.log(`Saved ${entry.firstName} + ${entry.lastName}`);
      }
    });
  }
};
