//@@viewOn:imports
import { createComponent, useDataObject } from "uu5g04-hooks";
import Calls from "calls";
import Config from "./config/config";
import DataContext from "./data-context";
//@@viewOff:imports

const DataProvider = createComponent({
  //@@viewOn:statics
  displayName: Config.TAG + "DataProvider",
  //@@viewOff:statics

  render({ children }) {
    //@@viewOn:hooks
    const state = useDataObject({
      handlerMap: {
        load: Calls.getCurrent,
        delete: handleDelete
      },
    });
    //@@viewOff:hooks
    //@@viewOn:render
    return <DataContext.Provider value={state}>{children}</DataContext.Provider>;
    //@@viewOff:render
    
    async function handleDelete(dtoIn) {
      return await Calls.deleteData(dtoIn)
    }
  }
});

export default DataProvider;
