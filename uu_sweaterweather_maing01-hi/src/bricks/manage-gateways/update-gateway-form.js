//@@viewOn:imports
import UU5 from "uu5g04";
import { createVisualComponent, useLsiValues } from "uu5g04-hooks";
import Config from "./config/config";
import "uu5g04-forms";
import Css from "./gateway.css";
import Lsi from "./update-gateway-form.lsi"
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
    gateway: {},
    onSave: () => { },
    onCancel: () => { },
    shown: false,
  },
  //@@viewOff:defaultProps

  render({ shown, onSave, onCancel, gateway }) {
   let inputLsi = useLsiValues(Lsi)
    //@@viewOn:render
    let items = [];
    Config.gatewayStateList.map(state => {
      const isInitial = state.type === "initial";
      !isInitial && items.push({
        value: state.code,
        content: (
          <UuP.Bricks.State
            key={state.code}
            stateName={state.code}
            stateType={state.type}
            color={state.type === ''}
            type={"button"}
          />
        )
      });
    })
    return (
      <UU5.Forms.ContextModal
      className={Css.form()}
        shown={shown}
        size="l"
        header={
          <UU5.Forms.ContextHeader
            content={<UU5.Bricks.Lsi lsi={{ en: "Update gateway", cs: "Přidat bránu" }} style={{color: "#454754"}}/>}
            info={<UU5.Bricks.Lsi lsi={{ cs: "Více informací...", en: "More info..." }} style={{color: "#454754"}}/>}
          />
        }
        footer={
          <UU5.Forms.ContextControls
            buttonSubmitProps={{ content: <UU5.Bricks.Lsi lsi={{ en: "Update", cs: "Vytvořit" }} /> }}
            buttonCancelProps={{ content: <UU5.Bricks.Lsi lsi={{ en: "Cancel", cs: "Zrušit" }} /> }}
          />
        }
      >
        <UU5.Forms.ContextForm onSave={onSave} onCancel={onCancel}>
          <UU5.Bricks.Row>
            <UU5.Bricks.Column colWidth="s-6" >
              <UU5.Forms.Text
                style={{color: "#454754"}}
                borderRadius="8px"
                label={inputLsi.gatewayNameCs}
                name="gatewayNameCs"
                value={gateway.gatewayName?.cs}
              />
            </UU5.Bricks.Column>
            <UU5.Bricks.Column colWidth="s-6" >
              <UU5.Forms.Text
                style={{color: "#454754"}}
                borderRadius="8px"
                label={inputLsi.gatewayNameEn}
                name="gatewayNameEn"
                value={gateway.gatewayName?.en}
              />
            </UU5.Bricks.Column>
             <UU5.Bricks.Column colWidth="s-6">
              <UU5.Forms.Text
                style={{color: "#454754"}}
                borderRadius="8px"
                label={inputLsi.link}
                name="href"
                value={gateway.location?.href}
              />
            </UU5.Bricks.Column>
              <UU5.Bricks.Column colWidth="s-6">
              <UU5.Forms.Text
                style={{color: "#454754"}}
                borderRadius="8px"
                label={inputLsi.coordinates}
                name="сoordinates"
                value={gateway.location?.сoordinates}
              />
            </UU5.Bricks.Column>   
            <UU5.Bricks.Column>
              <UU5.Forms.SwitchSelector
                items={items}
                label="state"
                value={gateway.state}
                name="state" />
            </UU5.Bricks.Column>
          </UU5.Bricks.Row>
        </UU5.Forms.ContextForm>
      </UU5.Forms.ContextModal>
    );
    //@@viewOff:render
  },
});

export default UpdateGatewayForm;
