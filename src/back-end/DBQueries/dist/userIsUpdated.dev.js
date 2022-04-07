"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.userIsUpdated = userIsUpdated;

var _dbConfig = require("../db/dbConfig.js");

var _firestore = require("firebase/firestore");

function userIsUpdated(userID) {
  var q, unsubscribe;
  return regeneratorRuntime.async(function userIsUpdated$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          q = (0, _firestore.query)((0, _firestore.collection)(_dbConfig.dbConfig, "2022-users"), (0, _firestore.where)("user_id", "==", userID));
          unsubscribe = (0, _firestore.onSnapshot)(q, function (snapshot) {
            snapshot.docChanges().forEach(function (change) {
              // console.log("change: ", change.doc.data());

              if (change.type === "added") {
                // console.log("Modified city: ", change.doc.data());
                // console.log("added user: ", change.doc.data());
                return change.doc.data();
              }
            });
            return null;
          });

        case 2:
        case "end":
          return _context.stop();
      }
    }
  });
}