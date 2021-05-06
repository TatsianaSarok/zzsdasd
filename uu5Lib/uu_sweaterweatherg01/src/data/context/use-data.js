//@@viewOn:revision
// coded: Petr Příhoda, 6.10.2020
//@@viewOff:revision

//@@viewOn:imports
import { useContext } from "uu5g04-hooks";
import Context from "./data-context";
//@@viewOff:imports

export function useData() {
  return useContext(Context);
}

export default useData;
