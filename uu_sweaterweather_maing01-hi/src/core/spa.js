//@@viewOn:imports
import { createVisualComponent, SessionProvider } from "uu5g04-hooks";
import Plus4U5 from "uu_plus4u5g01";
import "uu_plus4u5g01-app";

import Config from "./config/config.js";
import SpaAuthenticated from "./spa-authenticated.js";
import SweaterweatherMainContext from "../bricks/sweaterweather-main-context";
import SweaterweatherMainProvider from "../bricks/sweaterweather-main-provider";

//@@viewOff:imports

const STATICS = {
  //@@viewOn:statics
  displayName: Config.TAG + "Spa",
  //@@viewOff:statics
};

export const Spa = createVisualComponent({
  ...STATICS,

  //@@viewOn:propTypes
  //@@viewOff:propTypes

  //@@viewOn:defaultProps
  //@@viewOff:defaultProps

  render(props) {
    //@@viewOn:private
    //@@viewOff:private

    //@@viewOn:interface
    //@@viewOff:interface

    //@@viewOn:render
    return (
      <SessionProvider session={UU5.Environment.getSession()}>
        <SweaterweatherMainProvider>
          <SweaterweatherMainContext.Consumer>
          {({ state, errorData }) => {
              switch (state) {
                case "pending":
                case "pendingNoData":
                  return <UU5.Bricks.Loading />;
                case "error":
                case "errorNoData":
                  return <UU5.Bricks.Error error={errorData.error} />;
                case "ready":
                case "readyNoData":
                default:
                  return    <SpaAuthenticated {...props} />;
              }
            }}
          </SweaterweatherMainContext.Consumer>
</SweaterweatherMainProvider>
</SessionProvider>
     

    );
    //@@viewOff:render
  },
});

export default Spa;
