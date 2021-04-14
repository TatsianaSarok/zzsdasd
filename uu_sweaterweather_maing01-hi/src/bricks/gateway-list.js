//@@viewOn:imports
import UU5 from "uu5g04";
import { createVisualComponent, useState, useContext, useSession } from "uu5g04-hooks";
import GatewayGraph from "../routes/gateway-graph";
import Config from "./config/config";
import Css from "./sweaterweather.css";
import "uu5g04-bricks";
import "uu5g04-forms";
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
    //@@viewOn:hooks
    const [gatewayName, setGatewayName] = useState('')
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
        <UU5.Forms.SwitchSelector
          items={data.map(value => ({ value: value?.data?.gatewayName }))}
          label="Choose location"
          onChange={({ value }) => { setGatewayName(value)  }}
          value={gatewayName}
        />
        {/* <UU5.Forms.Select
          //className={Css.dropdown()}
          label="Choose location"
          size="m"
          onChange={({ value }) => { goToGatewayGraph(value) }}
        >
          {data.map(data => {
            return <UU5.Forms.Select.Option
              value={data.data.gatewayName}
            />
          })}
        </UU5.Forms.Select> */}
        <UU5.Bricks.Text>{gatewayName}</UU5.Bricks.Text>
        <GatewayGraph gatewayName={gatewayName} />
      </>

    );
    //@@viewOff:render
  },
});

export default GatewayList;
