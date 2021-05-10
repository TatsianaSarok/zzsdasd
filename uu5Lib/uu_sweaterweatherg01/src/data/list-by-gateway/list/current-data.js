//@@viewOn:imports
import UU5 from "uu5g04";
import { createComponent } from "uu5g04-hooks";
import Config from "../../config/config";
import useData from "../../context/use-data";
import DataStateResolver from "../../../common/resolver/data-list-state-resolver";
import CurrentDataView from "./current-data-view";
//@@viewOff:imports

const STATICS = {
  //@@viewOn:statics
  displayName: Config.TAG + "CurrentData",
  //@@viewOff:statics
};

export const CurrentData = createComponent({
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
    let dataCurrentData = useData();
    let currentData = currentData.data;
console.log("d",currentData);
    //@@viewOn:interface
    //@@viewOff:interface

    //@@viewOn:render
  
    return (
      <DataStateResolver currentData={dataCurrentData}>
       <CurrentDataView currentData={currentData} />
      </DataStateResolver>

    ) 
    //@@viewOff:render
  },
});

export default CurrentData;
