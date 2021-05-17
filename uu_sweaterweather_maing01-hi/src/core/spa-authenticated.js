//@@viewOn:imports
import UU5 from "uu5g04";
import "uu5g04-bricks";
import { createVisualComponent, useState } from "uu5g04-hooks";
import Plus4U5 from "uu_plus4u5g01";
import "uu_plus4u5g01-app";
import Config from "./config/config";
import Left from "./left";
import Bottom from "./bottom";
import Home from "../routes/home";
import Sweaterweather from "../routes/sweaterweather";
import ManageGateways from "../routes/manage-gateways";
import Lsi from "../config/lsi.js";
import Css from "./top.css"
//@@viewOff:imports

const STATICS = {
  //@@viewOn:statics
  displayName: Config.TAG + "SpaAuthenticated",
  //@@viewOff:statics
};


const About = UU5.Common.Component.lazy(() => import("../routes/about"));
const InitAppWorkspace = UU5.Common.Component.lazy(() => import("../routes/init-app-workspace"));
const ControlPanel = UU5.Common.Component.lazy(() => import("../routes/control-panel"));
const DEFAULT_USE_CASE = "home";
const ROUTES = {
  "": DEFAULT_USE_CASE,
  home: { component: <Home /> },
  about: { component: <About /> },
  sweaterweather: { component: <Sweaterweather /> },
  managegateways: { component: <ManageGateways /> },
  "sys/uuAppWorkspace/initUve": { component: <InitAppWorkspace /> },
  controlPanel: { component: <ControlPanel /> },
};

export const SpaAuthenticated = createVisualComponent({
  ...STATICS,

  //@@viewOn:propTypes
  //@@viewOff:propTypes

  //@@viewOn:defaultProps
  //@@viewOff:defaultProps

  render(props) {
    //@@viewOn:private
//@@viewOn:handlers
    let [initialActiveItemId] = useState(() => {
      let url = UU5.Common.Url.parse(window.location.href);
      return url.useCase || DEFAULT_USE_CASE;
    });
    //@@viewOff:private
    //@@viewOn:interface
    //@@viewOff:interface
    //@@viewOn:render
    return (
      <Plus4U5.App.MenuProvider activeItemId={initialActiveItemId}>
        <Plus4U5.App.Page className={Css.page()} 
          backgroundImageSrc = "assets/logoscop.jpg"
          top={
          <Plus4U5.App.TopBt  className={Css.top()}>
          <Plus4U5.App.MenuTree className={Css.menu()}
          borderBottom
          items={[
            { id: "data", href: "sweaterweather", content: <UU5.Bricks.Lsi lsi={Lsi.left.sweaterweather} style={{ color:"#866B6E"}} /> }
        ]}
        />
      </Plus4U5.App.TopBt> }      
          topFixed="smart"
          bottom={<Bottom />}
          type={3}
          displayedLanguages={["cs", "en"]}
          leftWrapperProps={{ style: { backgroundColor: 'rgba(228,223,220, 0.8)' } }}
          left={<Left />}
          leftWidth="!xs-300px !s-300px !m-288px !l-288px !xl-288px"
          leftFixed
          leftRelative="m l xl"
          leftResizable="m l xl"
          leftResizableMinWidth={220}
          leftResizableMaxWidth={500}
          isLeftOpen="m l xl"
          showLeftToggleButton
          fullPage={true}
        >
          <Plus4U5.App.MenuConsumer>
            {({ setActiveItemId }) => {
              let handleRouteChanged = ({ useCase, parameters }) => setActiveItemId(useCase || DEFAULT_USE_CASE);
              return <UU5.Common.Router routes={ROUTES} controlled={false} onRouteChanged={handleRouteChanged} />;
            }}
          </Plus4U5.App.MenuConsumer>
        </Plus4U5.App.Page>
      </Plus4U5.App.MenuProvider>
    );
    //@@viewOff:render
  },
});

export default SpaAuthenticated;
