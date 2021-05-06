
//@@viewOn:imports
import { createComponent, useDataObject } from "uu5g04-hooks";
import Calls from "calls";
import Config from "./config/config";
//@@viewOff:imports

const DataProvider = createComponent({
  //@@viewOn:statics
  displayName: Config.TAG + "DataProvider",
  //@@viewOff:statics
  //@@viewOn:propTypes
  propTypes: {
    baseUri: UU5.PropTypes.string,
    gatewayName: UU5.PropTypes.string.isRequired,
    startTime: UU5.PropTypes.string.isRequired,
    graphType: UU5.PropTypes.string.isRequired,
  },
  //@@viewOff:propTypes

  //@@viewOn:defaultProps
  defaultProps: {

  },
  //@@viewOff:defaultProps

  render({ children, baseUri, gatewayName, startTime, graphType }) {

    let objectDataValues = useDataObject({
      initialDtoIn: { baseUri, gatewayName, startTime, graphType },
      handlerMap: {
        load: Calls.dayList,
      },
    });

    let { state, data, pendingData, errorData, handlerMap } = objectDataValues;
    //@@viewOn:render
    return children({
      state,
      data,
      pendingData,
      errorData,
      handlerMap,
    });
    //@@viewOff:render
  },
});

export default DataProvider;
