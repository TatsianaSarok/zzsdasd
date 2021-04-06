//@@viewOn:imports
import UU5 from "uu5g04";
import { createVisualComponent, useState, useContext, useSession } from "uu5g04-hooks";
import Config from "./config/config";
import Uu5Tiles from "uu5tilesg02";
import Gateway from "./gateway";
//@@viewOff:imports

const GatewayList = createVisualComponent({
  //@@viewOn:statics
  displayName: Config.TAG + "GatewayList",
  //@@viewOff:statics

  //@@viewOn:propTypes
  propTypes: {

  },
  //@@viewOff:propTypes

  //@@viewOn:defaultProps
  defaultProps: {

  },
  //@@viewOff:defaultProps

  render({ data }) {

    //@@viewOff:hooks

    //@@viewOn:private
    //@@viewOff:private




    //@@viewOn:interface
    function renderItem(data) {
      console.log(data.data.data);
      return (
        <Gateway
         data={data.data.data}
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
       <UU5.Bricks.Text >Manage devices</UU5.Bricks.Text>
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

export default GatewayList;
