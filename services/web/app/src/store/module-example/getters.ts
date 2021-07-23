import { GetterTree } from "vuex";
import { AppState } from "../index";
import { ExampleStateInterface } from "./state";

const getters: GetterTree<ExampleStateInterface, AppState> = {
  someAction(/* context */) {
    // your code
  },
};

export default getters;
