//@@viewOn:imports
import UU5 from "uu5g04";
import { createVisualComponent } from "uu5g04-hooks";
import ManageGateways from "../routes/manage-gateways";
import Config from "./config/config";

//@@viewOff:imports

const ManageGatewaysButton = createVisualComponent({
  //@@viewOn:statics
  displayName: Config.TAG + "ManageGatewaysButton",
  //@@viewOff:statics

  //@@viewOn:propTypes
  propTypes: {

  },
  //@@viewOff:propTypes

  //@@viewOn:defaultProps
  defaultProps: {

  },
  //@@viewOff:defaultProps

  render() {

    //@@viewOn:hooks

    //@@viewOff:hooks

    //@@viewOn:private    
    //@@viewOff:private

    //@@viewOn:interface

    //@@viewOn:interface

    //@@viewOn:handlers
    function handleClick(){
        return UU5.Environment.getRouter().setRoute({
            component: <ManageGateways />,
          });
    }
    //@@viewOff:handlers

    //@@viewOn:render
    return (
        <UU5.Bricks.Button
        onClick={handleClick}
        bgStyle="transparent"
        colorSchema="blue"
        size="m"
      >ManageGateways</UU5.Bricks.Button>
    );
    //@@viewOff:render
  },
});

export default ManageGatewaysButton;
