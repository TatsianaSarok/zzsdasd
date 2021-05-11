"use strict";
const Path = require("path");
const { Validator } = require("uu_appg01_server").Validation;
const { DaoFactory } = require("uu_appg01_server").ObjectStore;
const { ValidationHelper } = require("uu_appg01_server").AppServer;
const Errors = require("../api/errors/data-error.js");

const WARNINGS = {
  createUnsupportedKeys: {
    code: `${Errors.Create.UC_CODE}unsupportedKeys`
  },
  // updateUnsupportedKeys: {
  //   code: `${Errors.Update.UC_CODE}unsupportedKeys`,
  // },
  getUnsupportedKeys: {
    code: `${Errors.Get.UC_CODE}unsupportedKeys`,
  },
  deleteUnsupportedKeys: {
    code: `${Errors.Delete.UC_CODE}unsupportedKeys`,
  },
  listUnsupportedKeys: {
    code: `${Errors.List.UC_CODE}unsupportedKeys`,
  },
};
const DEFAULTS = {
  sortBy: "name",
  order: "asc",
  pageIndex: 0,
  pageSize: 100
};
class DataAbl {

  constructor() {
    this.validator = Validator.load();
    this.dao = DaoFactory.getDao("data");
  }

  async getCurrent(awid, dtoIn) {
    let validationResult = this.validator.validate("dataGetCurrentDtoInType", dtoIn);
    // hds 2.2, 2.3, A4, A5
    let uuAppErrorMap = ValidationHelper.processValidationResult(
      dtoIn,
      validationResult,
      WARNINGS.listUnsupportedKeys.code,
      Errors.List.InvalidDtoIn
    );
    let dtoOut = await this.dao.getCurrent(dtoIn.gatewayId);
    // hds 4
    dtoOut.uuAppErrorMap = uuAppErrorMap;
    return dtoOut; 
  }

  async dayList(awid, dtoIn, session) {
    let validationResult = this.validator.validate("dataDayListDtoInType", dtoIn);
    // hds 2.2, 2.3, A4, A5
    let uuAppErrorMap = ValidationHelper.processValidationResult(
      dtoIn,
      validationResult,
      WARNINGS.listUnsupportedKeys.code,
      Errors.List.InvalidDtoIn
    );
    //dtoIn.uuIdentity = session.getIdentity().getUuIdentity();
    if (!dtoIn.pageInfo) dtoIn.pageInfo = {};
    if (!dtoIn.pageInfo.pageSize) dtoIn.pageInfo.pageSize = DEFAULTS.pageSize;
    if (!dtoIn.pageInfo.pageIndex) dtoIn.pageInfo.pageIndex = DEFAULTS.pageIndex;
    let dtoOut = await this.dao.dayList(awid, dtoIn.gatewayId, dtoIn.startTime, dtoIn.graphType, dtoIn.pageInfo);
    // hds 4
    dtoOut.uuAppErrorMap = uuAppErrorMap;
    return dtoOut; 
  }

  async delete(awid, dtoIn) {
    let validationResult = this.validator.validate("dataDeleteDtoInType", dtoIn);
    let uuAppErrorMap = ValidationHelper.processValidationResult(
      dtoIn,
      validationResult,
      WARNINGS.deleteUnsupportedKeys.code,
      Errors.Delete.InvalidDtoIn
    );
    let dtoOut = await this.dao.delete(awid, dtoIn.gatewayId);
    dtoOut.uuAppErrorMap = uuAppErrorMap;
    return dtoOut;
  }

  async get(awid, dtoIn, session) {
    let validationResult = this.validator.validate("dataGetDtoInType", dtoIn);
    // hds 2.2, 2.3, A4, A5
    let uuAppErrorMap = ValidationHelper.processValidationResult(
      dtoIn,
      validationResult,
      WARNINGS.getUnsupportedKeys.code,
      Errors.Get.InvalidDtoIn
    );

    dtoIn.uuIdentity = session.getIdentity().getUuIdentity();

    // hds 3
    let data = await this.dao.get(awid, dtoIn.id);
    if (!data) {
      throw new Errors.Get.DataDoesNotExist(uuAppErrorMap, { dataId: dtoIn.id });
    }
    // hds 4
    data.uuAppErrorMap = uuAppErrorMap;
    return data;
  }

  // async list(awid, dtoIn, session) {
  //   let validationResult = this.validator.validate("dataListDtoInType", dtoIn);
  //   // hds 2.2, 2.3, A4, A5
  //   let uuAppErrorMap = ValidationHelper.processValidationResult(
  //     dtoIn,
  //     validationResult,
  //     WARNINGS.listUnsupportedKeys.code,
  //     Errors.List.InvalidDtoIn
  //   );
  //   dtoIn.uuIdentity = session.getIdentity().getUuIdentity();
  //   let dtoOut = await this.dao.list(awid, dtoIn.gatewayName);
  //   // hds 4
  //   dtoOut.uuAppErrorMap = uuAppErrorMap;
  //   return dtoOut; 
  //  }

  async create(awid, dtoIn, session) {
      // hds 2, 2.1
      let validationResult = this.validator.validate("dataCreateDtoInType", dtoIn);
      // hds 2.2, 2.3, A3, A4
      let uuAppErrorMap = ValidationHelper.processValidationResult(
        dtoIn,
        validationResult,
        WARNINGS.createUnsupportedKeys.code,
        Errors.Create.InvalidDtoIn
      );
      dtoIn.uuIdentity = session.getIdentity().getUuIdentity();
      dtoIn.awid = awid;
      dtoIn.timestamp = new Date(dtoIn.timestamp)
      let data;
      try {
        data = await this.dao.create(dtoIn);
      } catch (e) {
        // A8
        if (e instanceof ObjectStoreError) {
          throw new Errors.Create.DataDaoCreateFailed({ uuAppErrorMap }, e);
        }
        throw e;
      }
      // hds 4
      data.uuAppErrorMap = uuAppErrorMap;

      return data
  }

}

module.exports = new DataAbl();
