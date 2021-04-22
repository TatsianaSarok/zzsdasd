//@@viewOn:imports
import UU5 from "uu5g04";
import { createVisualComponent } from "uu5g04-hooks";
import Config from "./config/config";
import "uu5g04-bricks";
import "uu5g04-forms";
import Css from "./gateway.css";
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
    console.log("DAta data", data.map(value => {
      return value.data.gatewayName
    }));
    //@@viewOn:hooks

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
      <div className={Css.gateway()}  >
        <UU5.Bricks.Card
          colorSchema="grey"
          width={100}>
          <div className={Css.icon()}>
            <UU5.Bricks.Button
              bgStyle="transparent" size="xl">
              <UU5.Bricks.Icon icon="mdi-plus-circle"/>
            </UU5.Bricks.Button>
          </div>
        </UU5.Bricks.Card>

        {data.map(value => {
          return (<UU5.Bricks.Card
            className={Css.gatewayStyle()}
            bgStyle="transparent"
            colorSchema="blue"
            width={350}
            bgStyle="filled" >
            <UU5.Bricks.Text colorSchema="grey" >Gatewat name: {value.data.gatewayName}</UU5.Bricks.Text>
            <UU5.Bricks.Text colorSchema="black" >Gatewat location: {value.data.location}</UU5.Bricks.Text>
            <UU5.Bricks.Text colorSchema="grey" >Gatewat id: {value.data.id}</UU5.Bricks.Text>
          </UU5.Bricks.Card>
          )
        })}
      </div>
    );
    //@@viewOff:render
  },
});

export default GatewayList;
