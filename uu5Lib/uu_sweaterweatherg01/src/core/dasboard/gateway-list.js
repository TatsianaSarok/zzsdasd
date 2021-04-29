//@@viewOn:imports
import UU5 from "uu5g04";
import { createVisualComponent, useState, useEffect, useSession } from "uu5g04-hooks";
import GatewayGraph from "./gateway-graph";
import Config from "./config/config";
import "uu5g04-bricks";
import "uu5g04-forms";
import DateTime from "./date-time";
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

  render({ data, baseUri }) {
    //@@viewOn:hooks
    const [gatewayName, setGatewayName] = useState('Works');
    const [graphType, setGraphType] = useState('last 24h')
    //@@viewOff:hooks
    let location = data.map(value => {
      return value.data.gatewayName
    })
    let startTime = new Date(Date.now() - 86400 * 1000).toISOString()
    let graphName = ["last 24h", "week", "month"];
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

    function Location() {
      return (
        <>
          <UU5.Bricks.Row className={Css.switcher()} >
            <UU5.Bricks.Column colWidth="m-4">
              <UU5.Forms.SwitchSelector
                colorSchema="green"
                items={location.map(value => ({ value }))}
                onChange={({ value }) => { setGatewayName(value) }}
                value={gatewayName} />
            </UU5.Bricks.Column>
          </UU5.Bricks.Row>
          <UU5.Bricks.Text>{gatewayName}</UU5.Bricks.Text>
          <DateTime />
          <UU5.Bricks.Row >
            <UU5.Bricks.Column colWidth="m-4">
              <UU5.Forms.SwitchSelector
                colorSchema="blue"
                items={graphName?.map(value => ({ value }))}
                onChange={({ value }) => { setGraphType(value) }}
                value={graphType}
              />
            </UU5.Bricks.Column>
          </UU5.Bricks.Row>
          <GatewayGraph gatewayName={gatewayName} baseUri={baseUri} startTime={startTime} graphType={graphType} />
        </>
      )
    }

    return (
      <>
        <div
          className={Css.header()}>
          Sweaterweather
        <UU5.Bricks.Icon icon="mdi-cloud" className={Css.iconSun()} />
        </div>
        <Location />
      </>
    );
    //@@viewOff:render
  },
});

export default GatewayList;
