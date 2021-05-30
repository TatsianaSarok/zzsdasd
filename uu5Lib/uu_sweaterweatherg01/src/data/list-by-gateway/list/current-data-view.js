//@@viewOn:imports
import UU5 from "uu5g04";
import "uu5g04-bricks"
import { createVisualComponent, useState,useRef, useEffect } from "uu5g04-hooks";
import Config from "../config/config";
import Calls from "calls";
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
    //@@viewOn:hooks
    const [datas, setDatas] = useState();
  useEffect(() => {
    const id = setInterval(() => {
        const fetchData = async () => {
          try {
            const baseUri= props.baseUri;
            const gateway = {
              gatewayId: props.gatewayId
            }
            setDatas(await Calls.getCurrent({ baseUri, gateway }));
          } catch (error) {
            console.log(error);
          }
        };
        fetchData();
    }, 60000)
    return () => clearInterval(id);
  }, [])

    //@@viewOn:render
    return (
      <div style={{ float: "right", margin: "10px 15px 0px 0px" }}>
        <UU5.Bricks.Icon icon="mdi-weather-sunny"
          style={{ fontFamily: 'Brush Script MT', fontSize: "40px", marginRight: "20px", color: "#ffba08" }}>
          <UU5.Bricks.Text
            style={{
              fontFamily: 'Brush Script MT',
              fontSize: "20px", color: "black"
            }}>
            {datas?.temperature||props?.currentData.temperature}&#8451;
              </UU5.Bricks.Text>
        </UU5.Bricks.Icon>

        <UU5.Bricks.Icon icon="mdi-meteor"
          style={{ fontSize: "40px", color: "#3297C3" }}>
          <UU5.Bricks.Text
            style={{
              fontFamily: 'Brush Script MT',
              fontSize: "20px", color: "black"
            }}>
            {datas?.humidity||props?.currentData.humidity}%
          </UU5.Bricks.Text>
        </UU5.Bricks.Icon>

       {props?.currentData.light && <UU5.Bricks.Icon icon="mdi-lightbulb-outline"
          style={{ fontSize: "40px", color: "#ffba08" }}>
          <UU5.Bricks.Text
            style={{
              fontFamily: 'Brush Script MT',
              fontSize: "20px", color: "black"
            }}>
            {datas?.light||props?.currentData.light}
          </UU5.Bricks.Text>
        </UU5.Bricks.Icon>}

      </div>
    );
    //@@viewOff:render
  }
});

function useInterval(callback, delay) {
  const savedCallback = useRef();

  // Remember the latest function.
  useEffect(() => {
    savedCallback.current = callback;
  }, [callback]);

  // Set up the interval.
  useEffect(() => {
    function tick() {
      savedCallback.current();
    }
    if (delay !== null) {
      let id = setInterval(tick, delay);
      return () => clearInterval(id);
    }
  }, [delay]);
}


export default CurrentData;

