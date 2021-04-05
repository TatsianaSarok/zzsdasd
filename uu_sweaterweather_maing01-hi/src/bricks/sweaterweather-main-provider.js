// //@@viewOn:imports
// import { createComponent, useDataObject } from "uu5g04-hooks";
// import Calls from "calls";
// import Config from "./config/config";
// import SweaterweatherMainContext from "./sweaterweather-main-context";
// //@@viewOff:imports

// const SweaterweatherMainProvider = createComponent({
//   //@@viewOn:statics
//   displayName: Config.TAG + "SweaterweatherMainProvider",
//   //@@viewOff:statics

//   render({ children }) {
//     //@@viewOn:hooks
//     const state = useDataObject({
//       handlerMap: {
//         load: Calls.loadSweaterweatherMain,
//       },
//     });
//     //@@viewOff:hooks

//     //@@viewOn:render
//     return <SweaterweatherMainContext.Provider value={state}>{children}</SweaterweatherMainContext.Provider>;
//     //@@viewOff:render
//   },
// });

// export default SweaterweatherMainProvider;
