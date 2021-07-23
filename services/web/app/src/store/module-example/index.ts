import { Module } from "vuex";
import state, { ExampleStateInterface } from "./state";
import actions from "./actions";
import getters from "./getters";
import mutations from "./mutations";
import { AppState } from "../types";

const exampleModule: Module<ExampleStateInterface, AppState> = {
  namespaced: true,
  actions,
  getters,
  mutations,
  state,
};

export default exampleModule;
