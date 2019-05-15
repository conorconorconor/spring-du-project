const express = require("express");
const User = require("../models/user");

createUser = data => {
  let user = new User();
  user.firstName = data.firstName;
  user.lastName = data.lastName;
  user.save((err, document) => {
    if (err) {
      return err;
    } else {
      return document;
    }
  });
};

deleteUser = id => {
  User.deleteOne(
    {
      _id: id
    },
    err => {
      if (err) {
        return err;
      } else {
        const success = `You have successfully deleted user: ${req.params.id}`;
        return success;
      }
    }
  );
};
