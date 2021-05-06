
//@@viewOn:imports
import UU5 from "uu5g04";
import { createComponent, useDataList } from "uu5g04-hooks";
import "uu_plus4u5g01-bricks";


import Config from "./config/config";
import Calls from "calls";
import { DataContext } from "./../context/data-context";
//@@viewOff:imports

export const ListByGatewayLoader = createComponent({
  //@@viewOn:statics
  displayName: Config.TAG + "ListByGatewayLoader",
  //@@viewOff:statics

  //@@viewOn:propTypes
  propTypes: {
    baseUri: UU5.PropTypes.string,
  },
  //@@viewOff:propTypes

  //@@viewOn:defaultProps
  defaultProps: {
    baseUri: undefined,
  },
  //@@viewOff:defaultProps

  render(props) {
    //@@viewOn:hooks
    const dataDataList = useDataList({
      handlerMap: {
        load: Calls.dayList,
      },
      initialDtoIn: getInitLoadDtoIn(props.baseUri, props.gatewayName, props.startTime, props.graphType),
    });
    //@@viewOff:hooks

    //@@viewOn:handlers

    //@@viewOn:private
    //@@viewOff:private

    //@@viewOn:render
    return <DataContext.Provider value={dataDataList}>{props.children}</DataContext.Provider>;
    //@@viewOff:render
  },
});

function getInitLoadDtoIn(baseUri, gatewayName, startTime, graphType) {
  let dtoIn = {};
  if (baseUri) {
    dtoIn.baseUri = baseUri;
    dtoIn.data = {
      gatewayName,
      startTime,
      graphType
    }
  }
  return dtoIn;
}
//@@viewOn:helpers
//@@viewOff:helpers

export default ListByGatewayLoader;
