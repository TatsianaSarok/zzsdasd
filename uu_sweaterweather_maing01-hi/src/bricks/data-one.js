//@@viewOn:imports
import UU5 from "uu5g04";
import { createVisualComponent } from "uu5g04-hooks";
import Config from "./config/config";
//@@viewOff:imports

const DataOne = createVisualComponent({
  //@@viewOn:statics
  displayName: Config.TAG + "DataOne",
  //@@viewOff:statics

  //@@viewOn:propTypes
  propTypes: {

    },

  
  //@@viewOff:propTypes

  //@@viewOn:defaultProps
  defaultProps: {

  },
  //@@viewOff:defaultProps

  render({ data, onDeleteData}) {
    //@@viewOn:private

    function handleDelete() {
      console.log(data.id);
      onDeleteData(data.id);
    }

    //@@viewOff:private

    //@@viewOn:render


    if (!data) {
      return null;
    }
    // onClick in div could be subject detail

    return (
      <>
    
        <UU5.Bricks.Button size="s" onClick={handleDelete} bgStyle="transparent">
                <UU5.Bricks.Icon icon="glyphicon-trash" />
              </UU5.Bricks.Button>
          <UU5.Bricks.Card >
            <UU5.Bricks.Text content= {data.gatewayName} />
            <UU5.Bricks.Text content={data.temperature} />
            <UU5.Bricks.Text content={data.humidity} />
          </UU5.Bricks.Card>
      </>
    );
    //@@viewOff:render
  },
});

export default DataOne;
