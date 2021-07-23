import { ActionTree } from "vuex";
import { AppState } from "../index";
import { ExampleStateInterface } from "./state";

const actions: ActionTree<ExampleStateInterface, AppState> = {
  someAction(/* context */) {
    // your code
  },
};

export default actions;
