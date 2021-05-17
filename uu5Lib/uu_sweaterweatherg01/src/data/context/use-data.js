//@@viewOn:imports
import { useContext } from "uu5g04-hooks";
import Context from "./data-context";
//@@viewOff:imports

export function useData() {
  return useContext(Context);
}

export default useData;
