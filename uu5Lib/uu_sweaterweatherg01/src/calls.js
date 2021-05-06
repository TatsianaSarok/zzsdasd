 import Plus4U5 from "uu_plus4u5g01";
 
 let Calls = {
   SERVER_BASE_URI: 'https://uuapp.plus4u.net/uun-bot21sft03-maing01/f18929c5921d4abebf5ac7a9eb2e7162/',
 
   async call(method, url, dtoIn, clientOptions) {
     let response = await Plus4U5.Common.Calls.call(method, url, dtoIn, clientOptions);
     return response.data;
   },
 
   listData( dtoIn) {
     let commandUri = Calls.getCommandUri("data/list", dtoIn.baseUri);
     return Calls.call("get", commandUri, dtoIn);
   },
 
   dayList(dtoIn) {
     let commandUri = Calls.getCommandUri("data/dayList", dtoIn.baseUri);
     delete dtoIn.baseUri;
     return Calls.call("get", commandUri, dtoIn);
   },
   deleteData(dtoIn) {
     let commandUri = Calls.getCommandUri("data/delete");
     return Calls.call("post", commandUri, dtoIn);
   },
   getGateway(dtoIn) {
     let commandUri = Calls.getCommandUri("gateway/get", dtoIn.baseUri);
     delete dtoIn.baseUri;
     return Calls.call("get", commandUri, dtoIn);
   },

   deleteGateway(baseUri,dtoIn) {
     let commandUri = Calls.getCommandUri("gateway/delete", baseUri);
     return Calls.call("post", commandUri, dtoIn);
   },
   updateGateway(baseUri, dtoIn) {
     let commandUri = Calls.getCommandUri("gateway/update", baseUri, dtoIn);
     return Calls.call("post", commandUri, dtoIn);
   },
   getCommandUri(aUseCase, baseUri) {
     if (!baseUri) return Calls.SERVER_BASE_URI + aUseCase.replace(/^\/+/, "");
     if(!baseUri.match(/^http.?:\/\//)) baseUri = "https://" + baseUri;
     return baseUri + (!baseUri.match(/\/$/)?"/":"") + aUseCase.replace(/^\/+/, "");
   },
 };
 
 export default Calls;
 