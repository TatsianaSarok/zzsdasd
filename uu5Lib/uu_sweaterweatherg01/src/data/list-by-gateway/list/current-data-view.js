//@@viewOn:imports
import UU5 from "uu5g04";
import "uu5g04-bricks"
import { createVisualComponent, useState, useLsiValues, useEffect } from "uu5g04-hooks";
import Config from "../config/config";
import Calls from "calls";
import Lsi from "../list-by-gateway-lsi"
//@@viewOff:imports

const CurrentData = createVisualComponent({
  //@@viewOn:statics
  displayName: Config.TAG + "CurrentData",
  //@@viewOff:statics

  //@@viewOn:propTypes
  propTypes: {
    currentData: UU5.PropTypes.object,
    gatewayId: UU5.PropTypes.string,
    baseUri: UU5.PropTypes.string,
  },
  //@@viewOff:propTypes

  //@@viewOn:defaultProps
  defaultProps: {
    currentData: {},
    gatewayId: undefined,
    baseUri: undefined
  },

  //@@viewOff:defaultProps
  render(props) {
    console.log("Propsss", props);
    //@@viewOn:hooks
    let inputLsi = useLsiValues(Lsi)
    const [currentData, setCurrentData] = useState();
    useEffect(() => {
      const id = setInterval(() => {
        const fetchData = async () => {
          try {
            const baseUri = props.baseUri;
            const gateway = {
              gatewayId: props.gatewayId
            }
            setCurrentData(await Calls.getCurrent({ baseUri, gateway }));
          } catch (error) {
            console.log(error);
          }
        };
        fetchData();
      }, 600000)
      return () => clearInterval(id);
    }, [])

    //@@viewOn:render
    return (
      
      <div style={{ float: "right", margin: "0px 15px 0px 0px", paddingRight: "70px", textAlign:"center"}}>
       <UU5.Bricks.Text
            style={{
              fontSize: "18px", color: "rgb(69, 71, 84)", paddingBottom: "5px"
            }}>
            {inputLsi.currentMeasurements+" "}
            <UU5.Bricks.Link
  href={props.location.href}
  target="_blank"
  onBlur={<UU5.Bricks.Text>"ulala"</UU5.Bricks.Text>}
  style={{color: "white", fontWeight:"bold", borderRadius:"5px", border: "1px solid rgb(134, 107, 110)", padding:"5px", backgroundColor: "rgb(134, 107, 110)"}}
>
<UU5.Bricks.Lsi lsi={{cs:props.gatewayName.cs, en:props.gatewayName.en}}/>
</UU5.Bricks.Link>
              </UU5.Bricks.Text>
              <UU5.Bricks.Icon icon="mdi-fire"
          style={{ fontFamily: 'Brush Script MT', fontSize: "20px", marginRight: "20px", color: "orange" }}>
          <UU5.Bricks.Text
            style={{
              fontFamily: 'Brush Script MT',
              fontSize: "20px", color: "rgb(69, 71, 84)"
            }}>
            {currentData?.temperature || props?.currentData.temperature}&#8451;
              </UU5.Bricks.Text>
        </UU5.Bricks.Icon>
        <UU5.Bricks.Icon icon="mdi-meteor"
          style={{ fontSize: "20px", color: "#3297C3" }}>
          <UU5.Bricks.Text
            style={{
              fontFamily: 'Brush Script MT',
              fontSize: "20px", color: "rgb(69, 71, 84)"
            }}>
            {currentData?.humidity || props?.currentData.humidity}%
          </UU5.Bricks.Text>
        </UU5.Bricks.Icon>
        {props?.currentData.light && (<UU5.Bricks.Icon icon="mdi-lightbulb-on-outline"
          style={{ fontSize: "20px", color: "#e40017", paddingLeft: "20px" }}>
          <UU5.Bricks.Text
            style={{
              fontFamily: 'Brush Script MT',
              fontSize: "20px", color: "rgb(69, 71, 84)"
            }}>
            {currentData?.light || props?.currentData.light}
          </UU5.Bricks.Text>
        </UU5.Bricks.Icon>)}
      </div>
    );
    //@@viewOff:render
  }
});

export default CurrentData;

