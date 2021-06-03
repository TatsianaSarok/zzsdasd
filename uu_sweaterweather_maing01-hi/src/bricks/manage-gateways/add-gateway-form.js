//@@viewOn:imports
import UU5 from "uu5g04";
import { createVisualComponent, useLsiValues  } from "uu5g04-hooks";
import Config from "./config/config";
import "uu5g04-forms";
import Css from "./gateway.css"
import Lsi from "./update-gateway-form.lsi"
//@@viewOff:imports

const AddGatewayForm = createVisualComponent({
  //@@viewOn:statics
  displayName: Config.TAG + "AddGatewayForm",
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
    onSave: () => { },
    onCancel: () => { },
    shown: false,
  },
  //@@viewOff:defaultProps

  render({ shown, onSave, onCancel }) {
    //@@viewOn:render
let inputLsi = useLsiValues(Lsi)
    return (

      <UU5.Forms.ContextModal
      className={Css.form()}
        shown={shown}
        size="l"
        header={
          <UU5.Forms.ContextHeader
            content={<UU5.Bricks.Lsi lsi={{ en: "Add gateway", cs: "Přidat bránu" }} />}
            info={<UU5.Bricks.Lsi lsi={{ cs: "Více informací...", en: "More info..." }} />}
          />
        }
        footer={
          <UU5.Forms.ContextControls
            buttonSubmitProps={{ content: <UU5.Bricks.Lsi lsi={{ en: "Create", cs: "Vytvořit" }} /> }}
            buttonCancelProps={{ content: <UU5.Bricks.Lsi lsi={{ en: "Cancel", cs: "Zrušit" }} /> }}
          />
        }
      >
        <UU5.Forms.ContextForm onSave={onSave} onCancel={onCancel}  >
          <UU5.Bricks.Row>
            <UU5.Bricks.Column colWidth="s-6" >
              <UU5.Forms.Text
                borderRadius="8px"
                label={inputLsi.gatewayNameCs}
                name="gatewayNameCs"
                value=""
                required
              />
            </UU5.Bricks.Column>
            <UU5.Bricks.Column colWidth="s-6" >
              <UU5.Forms.Text
                borderRadius="8px"
                label={inputLsi.gatewayNameEn}
                name="gatewayNameEn"
                value=""
                required
              />
            </UU5.Bricks.Column>
            <UU5.Bricks.Column colWidth="s-6">
              <UU5.Forms.Text
                style={{color: "#454754"}}
                borderRadius="8px"
                label={inputLsi.link}
                name="href"
                value=""
              />
            </UU5.Bricks.Column>
            <UU5.Bricks.Column colWidth="s-6">
              <UU5.Forms.Text
                style={{color: "#454754"}}
                borderRadius="8px"
                label={inputLsi.coordinates}
                name="сoordinates"
                value=""
              />
            </UU5.Bricks.Column>
          </UU5.Bricks.Row>
        </UU5.Forms.ContextForm>
      </UU5.Forms.ContextModal>
    );
    //@@viewOff:render
  },
});

export default AddGatewayForm;
