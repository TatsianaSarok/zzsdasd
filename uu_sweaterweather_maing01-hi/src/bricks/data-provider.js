//@@viewOn:imports
import { createComponent, useDataList } from "uu5g04-hooks";
import Calls from "calls";
import Config from "./config/config";
//@@viewOff:imports

const DataProvider = createComponent({
  //@@viewOn:statics
  displayName: Config.TAG + "DataProvider",
  //@@viewOff:statics

  render({ children, id }) {
    //@@viewOn:hooks
    let listDataValues = useDataList({
      pageSize: 200,
      handlerMap: {
        load: Calls.listData,
        // createJoke: Calls.createJoke,
        // updateJoke: Calls.updateJoke,
         deleteData: Calls.deleteData
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

export default DataProvider;