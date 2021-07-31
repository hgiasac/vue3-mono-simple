/* eslint-disable @typescript-eslint/no-var-requires */

module.exports = () => {
  const variables = {
    DATA_URL: process.env.DATA_URL,
    DATA_ADMIN_SECRET: process.env.DATA_ADMIN_SECRET,
    HASURA_CLIENT_NAME: process.env.HASURA_CLIENT_NAME,
    VERSION: process.env.VERSION,
    ...require("dotenv").config().parsed,
  };

  // check required env before build
  // ignore test environment
  if (process.env.TEST === "true") {
    return variables;
  }

  ["DATA_URL", "DATA_ADMIN_SECRET"].forEach((key) => {
    const value = variables[key];

    if (!value) {
      throw new Error(`Environment ${key} doesn't exist`);
    }
  });

  return variables;
};
