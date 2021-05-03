"use strict";
const { UuObjectDao } = require("uu_appg01_server").ObjectStore;

class DataMongo extends UuObjectDao {

  async createSchema() {
    await super.createIndex({ awid: 1, _id: 1 }, { unique: true });
  }
  async create(uuObject) {
    return await super.insertOne(uuObject);
  }

  async update(gateway) {
    let filter = { id: gateway.id, awid: gateway.awid };
    return await super.findOneAndUpdate(filter, gateway, "NONE");
  }

  async get(awid, id) {
    return await super.findOne({ awid, id });
  }

  // async delete(awid, id) {
  //   await super.deleteOne({ awid, id });
  // }

  async delete(awid, id) {
    await super.deleteMany({});
  }

  async list(awid, gatewayName) {
    let filter = { awid };
    gatewayName && (filter.gatewayName = gatewayName);
    return await super.find(filter)
  }

  async dayList( gatewayName, startTime, graphType) {
    startTime = new Date(startTime)
    let currentTime = await super.aggregate([
      { $sort: { "timestamp": -1 } },
      { $limit: 1 },
      { $project: { temperature: 1, humidity: 1 } }
    ])
    if (graphType === 'last 24h') {
      return await super.aggregate([
        {
          $match:
          {
            $and: [
              { timestamp: { $gte: startTime } },
              { gatewayName: gatewayName },
            ]
          }
        },
        {
          $group: {
            _id: {
              "year": { $year: "$timestamp" },
              "month": { $month: "$timestamp" },
              "day": { $dayOfMonth: "$timestamp" },
              "hour": { $hour: "$timestamp" }
            },
            "temperature": { "$avg": "$temperature" },
            "humidity": { "$avg": "$humidity" }
          }
        },
        { $addFields: { "currentTime": currentTime } },
        { $sort: { _id: 1 } }
      ])
    }
    else {
      return await super.aggregate([
        {
          $match:
          {
            $and: [
              { timestamp: { $gte: startTime } },
              { gatewayName: gatewayName }
            ]
          }
        },
        // {
        //   $autoBucket
        // }
        {
          $group: {
            _id: {
              "year": { $year: "$timestamp" },
              "month": { $month: "$timestamp" },
              "day": { $dayOfMonth: "$timestamp" }
            },
            "temperature": { "$avg": "$temperature" },
            "humidity": { "$avg": "$humidity" }
          }
        },
        { $addFields: { "gatewayName": gatewayName } },
        { $addFields: { "currentTime": currentTime } },
        { $sort: { _id: 1 } }
      ])
    }
  }

}

module.exports = DataMongo;
