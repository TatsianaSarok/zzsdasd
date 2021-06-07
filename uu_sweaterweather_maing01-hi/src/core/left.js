//@@viewOn:imports
import UU5 from "uu5g04";
import "uu5g04-bricks";
import { createVisualComponent, useContext } from "uu5g04-hooks";
import Plus4U5 from "uu_plus4u5g01";
import "uu_plus4u5g01-app";
import Config from "./config/config.js";
import Lsi from "../config/lsi.js";
import SweaterweatherMainContext from "../bricks/sweaterweather-main-context";
import Css from "./top.css"
//@@viewOff:imports


const STATICS = {
  //@@viewOn:static
  displayName: Config.TAG + "Left",
  //@@viewOff:static
};

export const Left = createVisualComponent({
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
    const contextData = useContext(SweaterweatherMainContext);
    const isAwidLisenceOwner = contextData?.data?.authorizedProfileList?.some(
      (profile) => profile === Config.Profiles.AWIDLISENCEOWNER
    );
    const isAuthorities = contextData?.data?.authorizedProfileList?.some(
      (profile) => profile === Config.Profiles.AUTHORITIES
    );
    function canManage() {
      return isAuthorities || isAwidLisenceOwner
    }
    //@@viewOn:render
    return (
      <Plus4U5.App.Left
        {...props}
        className={Css.left()}
        logoProps={{
          backgroundImageSrc: "assets/kargol.jpg",
        }}
        aboutItems={[{ content: <UU5.Bricks.Lsi lsi={Lsi.left.about} style={{ fontFamily: 'Brush Script MT', fontSize: "20px", color: "#454754", fontSize: "25px" }} />, href: "about" }]}
        helpHref={null}
      >
        <Plus4U5.App.MenuTree
          style={{ backgroundColor: 'rgba(228,223,220, 0.9)' }}
          borderBottom
          items={[
            // { id: "home", href: "home", content: <UU5.Bricks.Lsi lsi={Lsi.left.home} style={{ color: "#454754", fontSize: "19px" }} /> },
            { id: "data", href: "sweaterweather", content: <UU5.Bricks.Lsi lsi={Lsi.left.sweaterweather} style={{ color: "#454754", fontSize: "19px" }} /> },
            canManage() && { content: <UU5.Bricks.Lsi lsi={Lsi.left.managegateways} style={{ color: "#454754", fontSize: "19px" }} />, href: "managegateways" }
          ]}
        />
      </Plus4U5.App.Left>
    );
    //@@viewOff:render
  },
});

export default Left;
