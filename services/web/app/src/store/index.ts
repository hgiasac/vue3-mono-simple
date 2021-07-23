import { store } from "quasar/wrappers";
import { InjectionKey } from "vue";
import {
  createStore,
  Store as VuexStore,
  useStore as vuexUseStore,
} from "vuex";
import { AppState } from "./types";

import example from "./module-example";

export * from "./types";

/*
 * If not building with SSR mode, you can
 * directly export the Store instantiation;
 *
 * The function below can be async too; either use
 * async/await or return a Promise which resolves
 * with the Store instance.
 */

// provide typings for `this.$store`
declare module "@vue/runtime-core" {
  interface ComponentCustomProperties {
    $store: VuexStore<AppState>;
  }
}

// provide typings for `useStore` helper
export const storeKey: InjectionKey<VuexStore<AppState>> = Symbol("vuex-key");

export default store(function (/* { ssrContext } */) {
  const Store = createStore<AppState>({
    modules: {
      example,
    },

    // enable strict mode (adds overhead!)
    // for dev mode and --debug builds only
    strict: !!process.env.DEBUGGING,
  });

  return Store;
});

export function useAppStore() {
  return vuexUseStore(storeKey);
}
