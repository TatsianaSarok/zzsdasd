"use strict";
const DataAbl = require("../../abl/data-abl.js");

class DataController {

  getCurrent(ucEnv) {
    return DataAbl.getCurrent(ucEnv.getUri().getAwid(), ucEnv.getDtoIn());
  }

  dayList(ucEnv) {
    return DataAbl.dayList(ucEnv.getUri().getAwid(), ucEnv.getDtoIn(), ucEnv.getSession());
  }

  delete(ucEnv) {
    return DataAbl.delete(ucEnv.getUri().getAwid(), ucEnv.getDtoIn());
  }

  get(ucEnv) {
    return DataAbl.get(ucEnv.getUri().getAwid(), ucEnv.getDtoIn(), ucEnv.getSession());
  }

  list(ucEnv) {
    return DataAbl.list(ucEnv.getUri().getAwid(), ucEnv.getDtoIn(), ucEnv.getSession());
  }

  create(ucEnv) {
    return DataAbl.create(ucEnv.getUri().getAwid(), ucEnv.getDtoIn(), ucEnv.getSession());
  }

}

module.exports = new DataController();
