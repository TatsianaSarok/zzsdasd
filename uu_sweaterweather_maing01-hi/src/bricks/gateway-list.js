//@@viewOn:imports
import UU5 from "uu5g04";
import { createVisualComponent, useState, useEffect, useSession } from "uu5g04-hooks";
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
    const [time, setTime] = useState(time);
    let location = data.map(value => {
      return value.data.gatewayName
    })
    let d = new Date();
    let seconds = d.getUTCSeconds();
    let minutes = d.getUTCMinutes();
    let hours = d.getUTCHours();
    let days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
    const monthNames = ["January", "February", "March", "April", "May", "June",
  "July", "August", "September", "October", "November", "December"
];
    let day = days[d.getDay()];
    let month = monthNames[d.getMonth()+1];
    let date = d.getDate();
    let year = d.getFullYear();
    let currentDate = day+" "+date+" "+month+" "+year+" "+hours+":"+minutes+":"+seconds
    useEffect(() => {
      setTimeout(
        // Calling of setCount changes state and it ALWAYS triggers the effect because there are NO dependencies.
        () => setTime(currentDate),
        1000000000
      );

      // The returned value is used to clean up before next execution of the effect or component unmounting.
      return () => console.log("I have nothing to clean up!");
    });
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

    function Location() {
      console.log(gatewayName);
      return (
        <>
          <UU5.Bricks.Row className={Css.switcher()} >
            <UU5.Bricks.Column colWidth="m-4">
              <UU5.Forms.SwitchSelector
                colorSchema="green"
                items={location.map(value => ({ value }))}
                // label="Choose location"
                onChange={({ value }) => { setGatewayName(value) }}
                value={gatewayName} />
               
            </UU5.Bricks.Column>
          </UU5.Bricks.Row>
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
        <UU5.Bricks.Text>{gatewayName}</UU5.Bricks.Text>
        <UU5.Bricks.Text>{time}</UU5.Bricks.Text>
        <GatewayGraph gatewayName={gatewayName} />
      </>

    );
    //@@viewOff:render
  },
});

export default GatewayList;
