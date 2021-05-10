//@@viewOn:imports
import UU5 from "uu5g04";
import { createComponent, useState } from "uu5g04-hooks";
import Config from "../../config/config";

//@@viewOff:imports

const STATICS = {
  //@@viewOn:statics
  displayName: Config.TAG + "CurrentDataView",
  //@@viewOff:statics
};

export const CurrentDataView = createComponent({
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
console.log("dataaaa", props);
    let data = props?.dataList?.map(item => { return item.data })


    //@@viewOn:private
    //@@viewOff:private
    //@@viewOn:interface
    //@@viewOff:interface


    //@@viewOn:render

    return (
      <>

      </>
    )
    //@@viewOff:render
  },
});

export default CurrentDataView;
