import urql from "@urql/vue";
import { boot } from "quasar/wrappers";
import { createAuthClient } from "src/api/graphql/client";
import { XHasuraAdminSecret, XHasuraClientName } from "src/shared/types";

import { Config } from "../shared/config";

export default boot(({ app }) => {
  const client = createAuthClient({
    uri: Config.dataURL,
    getIdToken: () => Promise.resolve(null),
    headers: {
      [XHasuraClientName]: Config.hasuraClientName,
      [XHasuraAdminSecret]: Config.adminSecret,
    },
    version: Config.version,
  });

  app.use(urql as any, client);
});
