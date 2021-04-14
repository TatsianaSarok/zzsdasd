//@@viewOn:imports
import UU5 from "uu5g04";
import "uu5g04-bricks"
import { createVisualComponent, useState, useContext, useSession } from "uu5g04-hooks";
import Config from "./config/config";
import './data-list.css'
import Graph from "./graph";
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
    let currentData = gatewayName.itemList.sort((a, b) => {
      return a.timestamp - b.timestamp
    });
    console.log("currentData", currentData[0]);
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
      <div>
        <UU5.Bricks.Text > temperature{currentData[0].temperature}</UU5.Bricks.Text>
        <UU5.Bricks.Text > humidity{currentData[0].humidity}</UU5.Bricks.Text>
        <Graph gatewayName={gatewayName}/>
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
      </div>
    );
    //@@viewOff:render
  },
});

export default DataList;
