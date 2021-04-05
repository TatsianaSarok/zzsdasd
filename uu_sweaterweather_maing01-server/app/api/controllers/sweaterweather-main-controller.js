"use strict";
const SweaterweatherMainAbl = require("../../abl/sweaterweather-main-abl.js");

class SweaterweatherMainController {

  load(ucEnv) {
    return SweaterweatherMainAbl.load(ucEnv.getUri().getAwid(), ucEnv.getSession(), ucEnv.getAuthorizationResult());
  }
  init(ucEnv) {
    return SweaterweatherMainAbl.init(ucEnv.getUri(), ucEnv.getDtoIn(), ucEnv.getSession());
  }
}

module.exports = new SweaterweatherMainController();
