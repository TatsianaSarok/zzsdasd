//@@viewOn:imports
import UU5 from "uu5g04";
import { createComponent } from "uu5g04-hooks";
import Config from "./config/config";
import UuP from "uu_pg01";
import 'uu_pg01-bricks';
import ListByGatewayLoader from "./list-by-gateway-loader";
import List from "./list/list";


//@@viewOff:imports

const STATICS = {
  //@@viewOn:statics
  displayName: Config.TAG + "ListByGateway",
  //@@viewOff:statics
};

export const ListByGateway = createComponent({
  ...STATICS,

  //@@viewOn:propTypes
  propTypes: {},
  //@@viewOff:propTypes

  //@@viewOn:defaultProps
  defaultProps: {},
  //@@viewOff:defaultProps

  render(props) {
    //@@viewOn:private
    //@@viewOff:private

    //@@viewOn:interface
    //@@viewOff:interface

    //@@viewOn:render

    return (
      <UuP.Bricks.ComponentWrapper
        colorSchema={props.colorSchema}
        elevation={props.elevation}
        borderRadius={props.borderRadius}
        cardView={props.cardView}
      >
        <ListByGatewayLoader {...props}>
          <List />
        </ListByGatewayLoader>
      </UuP.Bricks.ComponentWrapper>
    )
    //@@viewOff:render
  },
});

export default ListByGateway
