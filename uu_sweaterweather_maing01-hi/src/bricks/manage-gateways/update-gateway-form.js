//@@viewOn:imports
import UU5 from "uu5g04";
import { createVisualComponent } from "uu5g04-hooks";
import Config from "./config/config";
import "uu5g04-forms";
//@@viewOff:imports

const UpdateGatewayForm = createVisualComponent({
  //@@viewOn:statics
  displayName: Config.TAG + "UpdateGatewayForm",
  //@@viewOff:statics

  //@@viewOn:propTypes
  propTypes: {
    gateway: UU5.PropTypes.object,
    onSave: UU5.PropTypes.func,
    onCancel: UU5.PropTypes.func,
    shown: UU5.PropTypes.bool,
  },
  //@@viewOff:propTypes

  //@@viewOn:defaultProps
  defaultProps: {
    gateway: undefined,
    onSave: () => { },
    onCancel: () => { },
    shown: false,
  },
  //@@viewOff:defaultProps

  render({ shown, onSave, onCancel, gateway }) {
    //@@viewOn:render
    console.log("gateway", gateway);
    return (
      <UU5.Forms.ContextModal
        shown={shown}
        size="l"
        header={
          <UU5.Forms.ContextHeader
            content={<UU5.Bricks.Lsi lsi={{ en: "Update gateway", cs: "Přidat bránu" }} />}
            info={<UU5.Bricks.Lsi lsi={{ cs: "Více informací...", en: "More info..." }} />}
          />
        }
        footer={
          <UU5.Forms.ContextControls
            buttonSubmitProps={{ content: <UU5.Bricks.Lsi lsi={{ en: "Update", cs: "Vytvořit" }} /> }}
            buttonCancelProps={{ content: <UU5.Bricks.Lsi lsi={{ en: "Cancel", cs: "Zrušit" }} /> }}
          />
        }
      >
        <UU5.Forms.ContextForm onSave={onSave} onCancel={onCancel}  >
          <UU5.Bricks.Row>
            <UU5.Bricks.Column colWidth="s-6" >
              <UU5.Forms.Text
                borderRadius="8px"
                label="Gateway name"
                name="gatewayName"
                value={gateway.gatewayName}
              // required
              />
            </UU5.Bricks.Column>
            <UU5.Bricks.Column colWidth="s-6">
              <UU5.Forms.Text
                borderRadius="8px"
                label={<UU5.Bricks.Lsi lsi={{ en: "Location", cs: "Poloha" }} />}
                name="location"
                value={gateway.location}
              />
            </UU5.Bricks.Column>
          </UU5.Bricks.Row>
        </UU5.Forms.ContextForm>
      </UU5.Forms.ContextModal>
    );
    //@@viewOff:render
  },
});

export default UpdateGatewayForm;
