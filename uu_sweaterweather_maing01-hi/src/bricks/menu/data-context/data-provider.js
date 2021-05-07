//@@viewOn:imports
import { createComponent, useDataList } from "uu5g04-hooks";
import Calls from "calls";
import Config from "../config/config";
import DataContext from "./data-context";
//@@viewOff:imports

const DataProvider = createComponent({
  //@@viewOn:statics
  displayName: Config.TAG + "DataProvider",
  //@@viewOff:statics

  render({ children }) {
    //@@viewOn:hooks
    const state = useDataList({
      pageSize: 200,
      handlerMap: {
        load: Calls.getCurrent,
      },
    });
    //@@viewOff:hooks

    //@@viewOn:render
    return <DataContext.Provider value={state}>{children}</DataContext.Provider>;
    //@@viewOff:render
  }
});

export default DataProvider;
