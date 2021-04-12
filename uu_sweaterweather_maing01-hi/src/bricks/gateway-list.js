//@@viewOn:imports
import UU5 from "uu5g04";
import { createVisualComponent, useState, useContext, useSession } from "uu5g04-hooks";
import Config from "./config/config";
import Css from "./sweaterweather.css";
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
console.log("Data", data.map(data=>{
 return data.data.gatewayName
}));
    //@@viewOff:hooks

    //@@viewOn:private
    //@@viewOff:private




    //@@viewOn:interface

    //@@viewOn:interface

    //@@viewOn:handlers

    //@@viewOff:handlers

    //@@viewOn:render




    if (data.length === 0) {
      return <>
        <UU5.Common.Error content="WTF No data!" />
      </>
    }

    return (
      <>
      <UU5.Bricks.Header 
      className="uu5-common-center" 
      level="2"
      content="Sweater weather"    
      /> 
       <UU5.Bricks.Dropdown 
       className={Css.dropdown()}
       label="Choose location" 
       size="m" colorSchema="brown"
       iconClosed="mdi-menu">
       {data.map(data=>{
    return <UU5.Bricks.Dropdown.Item label={data.data.gatewayName}/>
   })}
</UU5.Bricks.Dropdown>
      </>
    );
    //@@viewOff:render
  },
});

export default GatewayList;
