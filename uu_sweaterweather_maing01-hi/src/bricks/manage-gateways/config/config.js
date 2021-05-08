import UU5 from "uu5g04";
import Config from "../../config/config.js";

const TAG = Config.TAG + "ManageGateways";

export default {
  ...Config,
  gatewayStateList: [
    {
      code: "initial",
      type: "initial",
      name: "Initial",
    },
    {
      code: "active",
      type: "active",
      name: "Active",
    },
    {
      code: "suspended",
      type: "passive",
      name: "Suspended",
    },
    {
      code: "closed",
      type: "final",
      name: "Closed",
    }
  ],
  TAG,
  Css: UU5.Common.Css.createCssModule(
    TAG.replace(/\.$/, "")
      .toLowerCase()
      .replace(/\./g, "-")
      .replace(/[^a-z-]/g, ""),
    process.env.NAME + "/" + process.env.OUTPUT_NAME + "@" + process.env.VERSION // this helps preserve proper order of styles among loaded libraries
  )
};
