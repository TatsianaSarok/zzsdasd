"use strict";
const Path = require("path");
const { Validator } = require("uu_appg01_server").Validation;
const { DaoFactory } = require("uu_appg01_server").ObjectStore;
const { ValidationHelper } = require("uu_appg01_server").AppServer;
const Errors = require("../api/errors/gateway-error.js");

const WARNINGS = {
  createUnsupportedKeys: {
    code: `${Errors.Create.UC_CODE}unsupportedKeys`
  },
  updateUnsupportedKeys: {
    code: `${Errors.Update.UC_CODE}unsupportedKeys`,
  },
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

class GatewayAbl {

  constructor() {
    this.validator = Validator.load();
    this.dao = DaoFactory.getDao("gateway");
  }

  async list(awid, dtoIn, session) {
    let validationResult = this.validator.validate("gatewayListDtoInType", dtoIn);
    // hds 2.2, 2.3, A4, A5
    let uuAppErrorMap = ValidationHelper.processValidationResult(
      dtoIn,
      validationResult,
      WARNINGS.listUnsupportedKeys.code,
      Errors.List.InvalidDtoIn
    );
    dtoIn.uuIdentity = session.getIdentity().getUuIdentity();
    let dtoOut = await this.dao.list(awid);
    // hds 4
    dtoOut.uuAppErrorMap = uuAppErrorMap;
    return dtoOut;
  }

  async delete(awid, dtoIn) {
    let validationResult = this.validator.validate("gatewayDeleteDtoInType", dtoIn);
    let uuAppErrorMap = ValidationHelper.processValidationResult(
      dtoIn,
      validationResult,
      WARNINGS.deleteUnsupportedKeys.code,
      Errors.Delete.InvalidDtoIn
    );
    await this.dao.delete(awid, dtoIn.id);
    let dtoOut = {};
    dtoOut.uuAppErrorMap = uuAppErrorMap;
    return dtoOut;
  }  
    
  

  async get(awid, dtoIn, session) {
    let validationResult = this.validator.validate("gatewayGetDtoInType", dtoIn);
    // hds 2.2, 2.3, A4, A5
    let uuAppErrorMap = ValidationHelper.processValidationResult(
      dtoIn,
      validationResult,
      WARNINGS.getUnsupportedKeys.code,
      Errors.Get.InvalidDtoIn
    );

    dtoIn.uuIdentity = session.getIdentity().getUuIdentity();

    // hds 3
    let gateway = await this.dao.get(awid, dtoIn.id);
    if (!gateway) {
      throw new Errors.Get.GatewayDoesNotExist(uuAppErrorMap, { gatewayId: dtoIn.id });
    }
    // hds 4
    gateway.uuAppErrorMap = uuAppErrorMap;
    return gateway;
  }

  async update(awid, dtoIn, session) {
    let validationResult = this.validator.validate("gatewayUpdateDtoInType", dtoIn);
    // hds 2.2, 2.3, A3, A4
    let uuAppErrorMap = ValidationHelper.processValidationResult(
      dtoIn,
      validationResult,
      WARNINGS.updateUnsupportedKeys.code,
      Errors.Update.InvalidDtoIn
    );

    // hds 3
    let gateway = await this.dao.get(awid, dtoIn.id);
    // A5
    if (!gateway) {
      throw new Errors.Update.GatewayDoesNotExist({ uuAppErrorMap }, { gatewayId: dtoIn.id });
    }

    // hds 4
    dtoIn.uuIdentity = session.getIdentity().getUuIdentity();
    // hds 7rs

    try {
      dtoIn.awid = awid;
      gateway = await this.dao.update(dtoIn);
    } catch (e) {
      if (e instanceof ObjectStoreError) {
        // A10
        throw new Errors.Update.GatewayDaoUpdateFailed({ uuAppErrorMap }, e);
      }
      throw e;
    }

    // hds 8
    gateway.uuAppErrorMap = uuAppErrorMap;
    return gateway;
  }
  

  async create(awid, dtoIn, session) {

    // hds 2, 2.1
    let validationResult = this.validator.validate("gatewayCreateDtoInType", dtoIn);
    // hds 2.2, 2.3, A3, A4
    let uuAppErrorMap = ValidationHelper.processValidationResult(
      dtoIn,
      validationResult,
      WARNINGS.createUnsupportedKeys.code,
      Errors.Create.InvalidDtoIn
    );
    dtoIn.uuIdentity = session.getIdentity().getUuIdentity();
    dtoIn.awid = awid;
    let gateway;
    try {
      gateway = await this.dao.create(dtoIn);
    } catch (e) {
      // A8
      if (e instanceof ObjectStoreError) {
        throw new Errors.Create.GatewayDaoCreateFailed({ uuAppErrorMap }, e);
      }
      throw e;
    }
    // hds 4
    gateway.uuAppErrorMap = uuAppErrorMap;
    return gateway;
  }

}

module.exports = new GatewayAbl();
