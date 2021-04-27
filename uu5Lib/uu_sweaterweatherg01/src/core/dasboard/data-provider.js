
//@@viewOn:imports
import UU5 from "uu5g04";
import { createComponent, useDataObject } from "uu5g04-hooks";
import Calls from "calls";
import Config from "./config/config";
//@@viewOff:impor<<<<

const DataProvider = createComponent({
  //@@viewOn:statics
  displayName: Config.TAG + "DataProvider",
  //@@viewOff:statics

  render({ children, baseUri, gatewayName, startTime }) {
    console.log(gatewayName);
    let objectDataValues = useDataObject({
      //initialDtoIn: {gatewayName: gatewayName, baseUri:baseUri},
      handlerMap: {
        load: handleListDataLoad,
        loadList: handleDayListDataLoad
      },
      initialDtoIn: getInitLoadDtoIn(baseUri, gatewayName, startTime)
    });

    let { state, data, pendingData, errorData, handlerMap } = objectDataValues;
      console.log(data);
      console.log("Data in provider");
 async function  handleListDataLoad() {
   return await Calls.listData(getInitLoadDtoIn(baseUri, gatewayName, startTime))
   }

   async function  handleDayListDataLoad() {
    return await Calls.listData(getInitLoadDtoIn(baseUri, gatewayName, startTime))
    }

   function getInitLoadDtoIn(baseUri, gatewayName, startTime) {
    //  console.log("baseUri", baseUri);
      let dtoIn = {data:{} };
      if (baseUri) {
        dtoIn.baseUri = baseUri;
        dtoIn.data.gatewayName = gatewayName
        dtoIn.data.startTime = startTime
      }
      return dtoIn;
    }
    //@@viewOn:render
    return children({
      state,
      data,
      pendingData,
      errorData,
      handlerMap,
      // handlerMap2,
    });
    //@@viewOff:render
  },
});

export default DataProvider;
