//@@viewOn:imports
import UU5 from "uu5g04";
import { createVisualComponent, useState, useContext, useSession } from "uu5g04-hooks";
import Config from "./config/config";
import Uu5Tiles from "uu5tilesg02";
import DataOne from "./data-one";
import Gateways from "../routes/gateways"
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

  render({ data, onDeleteData }) {

    //@@viewOff:hooks

    //@@viewOn:private
    //@@viewOff:private

   function handleManageDevices() { 
    // return UU5.Environment.getRouter().setRoute({
    //    "managedevices": {component: <Gateways /> }
    // });
    return UU5.Environment.getRouter().setRoute("managedevices") 
    }


    //@@viewOn:interface
    function renderItem(data) {
      console.log(data.data.data);
      return (
        <DataOne
         data={data.data.data}
         onDeleteData={onDeleteData}
        />
      );
    }
    //@@viewOn:interface

    //@@viewOn:handlers

    //@@viewOff:handlers

    //@@viewOn:render

    if (data.length === 0) {
      return <>
        <Uu5Tiles.ControllerProvider data={data}>
        </Uu5Tiles.ControllerProvider>
        <UU5.Common.Error content="WTF No data!" />
      </>
    }

    return (
      <>
      <UU5.Bricks.Text >SweaterWeather</UU5.Bricks.Text>
      <UU5.Bricks.Button onClick={handleManageDevices}/>
          <Uu5Tiles.ControllerProvider data={data}>
            <Uu5Tiles.Grid tileHeight="auto" tileMinWidth={200} tileMaxWidth={300} tileSpacing={8} rowSpacing={8}>
              {renderItem}
            </Uu5Tiles.Grid>
          </Uu5Tiles.ControllerProvider>

      </>
    );
    //@@viewOff:render
  },
});

export default DataList;
