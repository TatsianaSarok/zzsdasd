//@@viewOn:imports
import UU5 from "uu5g04";
import "uu5g04-bricks"
import { createVisualComponent, useState, useContext, useSession } from "uu5g04-hooks";
import Config from "./config/config";
import './data-list.css'
//@@viewOff:imports

const DataList = createVisualComponent({
  //@@viewOn:statics
  displayName: Config.TAG + "DataList",
  //@@viewOff:statics

  //@@viewOn:propTypes
  propTypes: {

  },
  //@@viewOff:propTypes

  //@@viewOn:defaultProps
  defaultProps: {

  },
  //@@viewOff:defaultProps

  render({ gatewayName }) {
    console.log(gatewayName.itemList.map(item => {
      return item.gatewayName
    }));
    //@@viewOff:hooks

    //@@viewOn:private

    //@@viewOff:private

    //@@viewOn:interface

    //@@viewOn:interface

    //@@viewOn:handlers

    //@@viewOff:handlers

    //@@viewOn:render




    // if (data.length === 0) {
    //   return <>
    //     <UU5.Common.Error content="WTF No data!" />
    //   </>
    // }

    return (
      <div className="left">
        {gatewayName.itemList.map(item => {
          return (<>
          <UU5.Bricks.Text className="location">{item.gatewayName}</UU5.Bricks.Text>
          <UU5.Bricks.Text className="temperature">{item.temperature}</UU5.Bricks.Text>
          <UU5.Bricks.Text className="location">{item.humidity}</UU5.Bricks.Text>
          </>)
        })
        }
      </div>
    );
    //@@viewOff:render
  },
});

export default DataList;
