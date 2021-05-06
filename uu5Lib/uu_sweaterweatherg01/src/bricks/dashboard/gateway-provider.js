//@@viewOn:imports
import { createComponent, useDataObject } from "uu5g04-hooks";
import Calls from "calls";
import Config from "./config/config";
//@@viewOff:imports

const GatewayProvider = createComponent({
  //@@viewOn:statics
  displayName: Config.TAG + "GatewayProvider",
  //@@viewOff:statics
  //@@viewOn:propTypes
  propTypes: {
    baseUri: UU5.PropTypes.string
  },
  //@@viewOff:propTypes

  //@@viewOn:defaultProps
  defaultProps: {
    baseUri: undefined
  },
  //@@viewOff:defaultProps
  render({ children, baseUri, gatewayId }) {
    //@@viewOn:hooks
    let listDataValues = useDataObject({
      initialDtoIn: { baseUri, id: gatewayId },
      handlerMap: {
        load: Calls.getGateway,
      }
    });

    let { state, data, newData, pendingData, errorData, handlerMap } = listDataValues;
    //@@viewOff:hooks
    //@@viewOn:render
    return children({
      state,
      data,
      newData,
      pendingData,
      errorData,
      handlerMap
    });
    //@@viewOff:render
  }
});

export default GatewayProvider;