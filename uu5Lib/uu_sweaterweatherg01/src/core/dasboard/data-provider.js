
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

  render({ children, baseUri, gatewayName, startTime, graphType }) {
    console.log(gatewayName);
    let objectDataValues = useDataObject({
      handlerMap: {
        load: handleListDataLoad,
      },
      initialDtoIn: getInitLoadDtoIn(baseUri, gatewayName, startTime, graphType)
    });

    let { state, data, pendingData, errorData, handlerMap } = objectDataValues;
    async function handleListDataLoad() {
      console.log("Out", await Calls.dayList(getInitLoadDtoIn(baseUri, gatewayName, startTime, graphType)));
      return await Calls.dayList(getInitLoadDtoIn(baseUri, gatewayName, startTime, graphType))
    }


    function getInitLoadDtoIn(baseUri, gatewayName, startTime, graphType) {
      //  console.log("baseUri", baseUri);
      let dtoIn = {};
      if (baseUri) {
        dtoIn.baseUri = baseUri;
        dtoIn.gatewayName = gatewayName
        dtoIn.startTime = startTime
        dtoIn.graphType  = graphType
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
