// //@@viewOn:imports
// import UU5 from "uu5g04";
// import "uu5g04-bricks"
// import { createVisualComponent, useState, useEffect } from "uu5g04-hooks";
// import Config from "../config/config";


// //@@viewOff:imports

// const CurrentMeasurement = createVisualComponent({
//     //@@viewOn:statics
//     displayName: Config.TAG + "CurrentMeasurement",
//     //@@viewOff:statics

//     //@@viewOn:propTypes
//     propTypes: {

//     },
//     //@@viewOff:propTypes

//     //@@viewOn:defaultProps
//     defaultProps: {

//     },
//     //@@viewOff:defaultProps

//     render(props) {
//         //@@viewOn:hooks
//         //@@viewOn:interface
//         console.log("p", props);
//         const [currentTemperature, setCurrentTemperature] = useState(props.currentData.temperature);
//         //@@viewOn:handlers
//         useEffect(() => {
//             console.log("ulalal");
//              setTimeout(
//                 () =>  setCurrentTemperature(20),
//                 1000
//             );
//         },[]);
//         //@@viewOff:handlers

//         //@@viewOn:render
//         return (
//             <div style={{ textAlign: "center", margin: "-12px, 0,-5px,0" }}>
//             <div style={{ display: "inline-block", marginRight: "25px" }}>
//               <UU5.Bricks.Icon icon="mdi-weather-sunny" style={{ color: "#f9f22a", fontSize: "50px" }} />
//               <UU5.Bricks.Text style={{ fontSize: "20px" }}> {currentTemperature} &#8451;</UU5.Bricks.Text>
//             </div>
//             <div style={{ display: "inline-block" }}>
//               <UU5.Bricks.Icon icon="mdi-weather-rainy" style={{ color: "blue", fontSize: "50px" }} />
//               <UU5.Bricks.Text style={{ fontSize: "20px" }}> {props.currentData.humidity}%</UU5.Bricks.Text>
//             </div>
//           </div>
//         );
//         //@@viewOff:render
//     },
// });

// export default CurrentMeasurement;

//@@viewOn:imports
import UU5 from "uu5g04";
import "uu5g04-bricks"
import { createVisualComponent} from "uu5g04-hooks";
import CurrentDataView from "./list/current-data-view";
import Config from "../config/config";
import CurrentDataLoader from "./current-data-loader"


// //@@viewOff:imports

const CurrentData = createVisualComponent({
    //@@viewOn:statics
    displayName: Config.TAG + "CurrentData",
    //@@viewOff:statics

    //@@viewOn:propTypes
    propTypes: {

    },
    //@@viewOff:propTypes

    //@@viewOn:defaultProps
    defaultProps: {

    },
    //@@viewOff:defaultProps

    render({baseUri, gatewayId}) {
        //@@viewOn:hooks
console.log("gatewayId", baseUri, gatewayId);
        //@@viewOff:handlers
          function renderLoad() {
            return <UU5.Bricks.Loading />;
          }
          function renderReady(data) {
            return (
              <>
                <CurrentDataView
                  currentData={data}
                />
              </>
            );
          }
      
          function renderError(errorData) {
            switch (errorData.operation) {
              case "load":
              case "loadNext":
              default:
                return <UU5.Bricks.Error content="Error happened!" error={errorData.error} errorData={errorData.data} />;
            }
          }
        //@@viewOn:render
        return (
            <CurrentDataLoader baseUri={baseUri} gatewayId={gatewayId}>
            {({ state, data, errorData, pendingData, handlerMap }) => {
         
              switch (state) {
                case "pending":
                case "pendingNoData":
                  return renderLoad();
                case "error":
                case "errorNoData":
                  return renderError(errorData);
                case "itemPending":
                case "ready":
                case "readyNoData":
                default:
                  return renderReady(data);
              }
            }}
          </CurrentDataLoader>
        );
        //@@viewOff:render
    },
});

export default CurrentData;