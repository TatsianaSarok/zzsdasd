
import DataListStateResolver from "./resolver/data-list-state-resolver.js";
import DataObjectStateResolver from "./resolver/data-object-state-resolver.js";
import DataError from "./resolver/data-error.js";
import DataPending from "./resolver/data-pending.js";
import Lsi from "./resolver/error-lsi.js";

const Common ={
    DataListStateResolver,
    DataObjectStateResolver,
    DataError,
    DataPending,
    Lsi
};
export {
    DataListStateResolver,
    DataObjectStateResolver,
    DataError,
    DataPending,
    Lsi
};

export default Common;