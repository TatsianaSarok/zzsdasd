//@@viewOn:imports
import UU5 from "uu5g04";
import { createComponent } from "uu5g04-hooks";
import Config from "../../config/config";
//@@viewOff:imports

const STATICS = {
  //@@viewOn:statics
  displayName: Config.TAG + "ListView",
  //@@viewOff:statics
};

export const ListView = createComponent({
  ...STATICS,

  //@@viewOn:propTypes
  propTypes: {
    dataList: UU5.PropTypes.array
  },
  //@@viewOff:propTypes

  //@@viewOn:defaultProps
  defaultProps: {
    dataList: undefined
  },
  //@@viewOff:defaultProps

  render(props) {
    //@@viewOn:private
    //@@viewOff:private
    //@@viewOn:interface
    //@@viewOff:interface

    //@@viewOn:render
    return props.dataList?.length > 0 ? props.dataList?.map(item=>{
          return JSON.stringify(item.data)
        }) : "no data"
;
    //@@viewOff:render
  },
});

export default ListView;
