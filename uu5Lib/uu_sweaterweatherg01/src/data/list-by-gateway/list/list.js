//@@viewOn:imports
import UU5 from "uu5g04";
import { createComponent } from "uu5g04-hooks";
import Config from "../../config/config";
import useData from "../../context/use-data";
import DataListStateResolver from "../../../common/resolver/data-list-state-resolver";
import ListView from "./list-view";
//@@viewOff:imports

const STATICS = {
  //@@viewOn:statics
  displayName: Config.TAG + "List",
  //@@viewOff:statics
};

export const List = createComponent({
  ...STATICS,

  //@@viewOn:propTypes
  propTypes: {},
  //@@viewOff:propTypes

  //@@viewOn:defaultProps
  defaultProps: {},
  //@@viewOff:defaultProps

  render(props) {
    //@@viewOn:private
    //@@viewOff:private
    let dataDataList = useData();
    let dataList = dataDataList.data;

    //@@viewOn:interface
    //@@viewOff:interface

    //@@viewOn:render
  
    return (
      <DataListStateResolver dataList={dataDataList}>
       <ListView dataList={dataList} />
      </DataListStateResolver>

    ) 
    //@@viewOff:render
  },
});

export default List;
