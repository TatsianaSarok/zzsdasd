/**
 * Server calls of application client.
 */
import UU5 from "uu5g04";
import Plus4U5 from "uu_plus4u5g01";

let Calls = {
  /** URL containing app base, e.g. "https://uuapp.plus4u.net/vendor-app-subapp/awid/". */
  APP_BASE_URI: location.protocol + "//" + location.host + UU5.Environment.getAppBasePath(),
 // isLocal: location.host.match(/localhost:4321/)??false,

  async call(method, url, dtoIn, clientOptions) {
    let response = await Plus4U5.Common.Calls.call(method, url, dtoIn, clientOptions);
    return response.data;
  },

  loadDemoContent(dtoIn) {
    let commandUri = Calls.getCommandUri("loadDemoContent");
    return Calls.call("get", commandUri, dtoIn);
  },

  loadSweaterweatherMain(dtoIn) {
    let commandUri = Calls.getCommandUri("sweaterweatherMain/load");
    return Calls.call("get", commandUri, dtoIn);
  },

  loadIdentityProfiles() {
    let commandUri = Calls.getCommandUri("sys/uuAppWorkspace/initUve");
    return Calls.call("get", commandUri, {});
  },

  initWorkspace(dtoInData) {
    let commandUri = Calls.getCommandUri("sys/uuAppWorkspace/init");
    return Calls.call("post", commandUri, dtoInData);
  },

  getWorkspace() {
    let commandUri = Calls.getCommandUri("sys/uuAppWorkspace/get");
    return Calls.call("get", commandUri, {});
  },

  async initAndGetWorkspace(dtoInData) {
    await Calls.initWorkspace(dtoInData);
    return await Calls.getWorkspace();
  },

  listData(dtoIn) {
    console.log("List", dtoIn);
    let commandUri = Calls.getCommandUri("data/list");
    return Calls.call("get", commandUri, dtoIn);
  },
  deleteData(dtoIn) {
    console.log("DtoIn", dtoIn);
    let commandUri = Calls.getCommandUri("data/delete");
    return Calls.call("post", commandUri, dtoIn);
  },
  listGateway(baseUri, dtoIn) {
    console.log("List", dtoIn);
    let commandUri = Calls.getCommandUri("gateway/list", baseUri);
    return Calls.call("get", commandUri, dtoIn);
  },
  getGateway(dtoIn) {
    console.log("Get", dtoIn);
    let commandUri = Calls.getCommandUri("gateway/get");
    return Calls.call("get", commandUri, dtoIn);
  },

  /*
  For calling command on specific server, in case of developing client site with already deployed
  server in uuCloud etc. You can specify url of this application (or part of url) in development
  configuration in *-client/env/development.json, for example:
   {
     ...
     "uu5Environment": {
       "gatewayUri": "https://uuapp.plus4u.net",
       "awid": "b9164294f78e4cd51590010882445ae5",
       "vendor": "uu",
       "app": "demoappg01",
       "subApp": "main"
     }
   }
   */
  getCommandUri(aUseCase, baseUri) {
  //if (Calls.isLocal) return "http://localhost:8080/uu-sweaterweather-maing01/22222222222222222222222222222222/" +aUseCase.replace(/^\/+/, "");
 //return "https://uuapp.plus4u.net/uun-bot21sft03-maing01/f18929c5921d4abebf5ac7a9eb2e7162/" + aUseCase.replace(/^\/+/, "");
    // useCase <=> e.g. "getSomething" or "sys/getSomething"
    // add useCase to the application base URI
    //let targetUriStr = Calls.APP_BASE_URI + aUseCase.replace(/^\/+/, "");
    let properBaseUri = Calls.APP_BASE_URI;
    if (baseUri) properBaseUri = !baseUri.endsWith("/") ? baseUri.concat("/") : baseUri;
    
    let targetUriStr = properBaseUri + aUseCase.replace(/^\/+/, "");
    
    // override tid / awid if it's present in environment (use also its gateway in such case)
    if (process.env.NODE_ENV !== "production") {
      let env = UU5.Environment;
      if (env.tid || env.awid || env.vendor || env.app) {
        let url = Plus4U5.Common.Url.parse(targetUriStr);
        if (env.tid || env.awid) {
          if (env.gatewayUri) {
            let match = env.gatewayUri.match(/^([^:]*):\/\/([^/]+?)(?::(\d+))?(\/|$)/);
            if (match) {
              url.protocol = match[1];
              url.hostName = match[2];
              url.port = match[3];
            }
          }
          if (env.tid) url.tid = env.tid;
          if (env.awid) url.awid = env.awid;
        }
        if (env.vendor || env.app) {
          if (env.vendor) url.vendor = env.vendor;
          if (env.app) url.app = env.app;
          if (env.subApp) url.subApp = env.subApp;
        }
        targetUriStr = url.toString();
      }
    }

    return targetUriStr;
  },
};

export default Calls;