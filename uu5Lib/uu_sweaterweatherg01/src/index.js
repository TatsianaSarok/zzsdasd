import UU5 from "uu5g04";
import Common from "./common/common.js";
import Data from "./data/data.js";

const UuSweatherweather = {
  Common,
  Gateway,
  Data,
};

export { Common, Data };
export default UuSweatherweather;

if (process.env.NODE_ENV !== "test") {
  console.log(
    `${process.env.NAME}-${process.env.VERSION} © Unicorn\nTerms of Use: https://unicorn.com/tou/${process.env.NAME}`
  );
}
UU5.Environment.addRuntimeLibrary({
  name: process.env.NAME,
  version: process.env.VERSION,
  namespace: process.env.NAMESPACE,
});
