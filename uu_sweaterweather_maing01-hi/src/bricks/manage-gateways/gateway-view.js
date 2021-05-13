//@@viewOn:imports
import UU5 from "uu5g04";
import { createVisualComponent } from "uu5g04-hooks";
import Config from "./config/config";
import "uu5g04-forms";

//@@viewOff:imports

const GatewayView = createVisualComponent({
  //@@viewOn:statics
  displayName: Config.TAG + "GatewayView",
  //@@viewOff:statics

  //@@viewOn:propTypes
  propTypes: {
    onSave: UU5.PropTypes.func,
    onCancel: UU5.PropTypes.func,
    shown: UU5.PropTypes.bool,
  },
  //@@viewOff:propTypes

  //@@viewOn:defaultProps
  defaultProps: {
    onSave: () => {},
    onCancel: () => {},
    shown: false,
  },
  //@@viewOff:defaultProps

  render(gateways) {
    //@@viewOn:render
    let gateway = gateways.gateway.data
console.log("gateways", gateways);
let state = Config.gatewayStateList.find(item => item.code === gateway.state)
              
    return (
<UU5.Bricks.Box>
<UU5.BlockLayout.Tile  borderRadius="8px"bgStyle="filled"  elevation={3}
 colorSchema="brown">
            <UU5.BlockLayout.Block >
              <UU5.BlockLayout.Row>
                <UU5.BlockLayout.Text icon="mdi-lumx">
                  {gateway.gatewayName}
                </UU5.BlockLayout.Text>
              </UU5.BlockLayout.Row>
              <UU5.BlockLayout.Block >
              <UU5.BlockLayout.Row size="m">
              <UU5.BlockLayout.Text >
                  GatewayId: {gateway.id}
                </UU5.BlockLayout.Text>
              </UU5.BlockLayout.Row>
              </UU5.BlockLayout.Block>
              <UU5.BlockLayout.Row size="s">
                <UU5.Bricks.Link>
                  <UU5.BlockLayout.Text icon="mdi-map-marker">
                   Location
                  </UU5.BlockLayout.Text>
                </UU5.Bricks.Link> <UU5.BlockLayout.Text weight="secondary">50.107577, 14.453512</UU5.BlockLayout.Text>
              </UU5.BlockLayout.Row>
              </UU5.BlockLayout.Block>
              <UU5.BlockLayout.Block >
              <UU5.BlockLayout.Row>
              <UuP.Bricks.State
                    stateType={state?.type}
                    stateName={state?.code} 
                 type="button"
              />
           </UU5.BlockLayout.Row>
           </UU5.BlockLayout.Block>
          </UU5.BlockLayout.Tile>
</UU5.Bricks.Box>
    );
    //@@viewOff:render
  },
});

export default GatewayView;
