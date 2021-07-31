/* eslint-disable @typescript-eslint/no-var-requires */

module.exports = () => {
  const variables = {
    API_HOST: process.env.API_HOST,
    ...require("dotenv").config().parsed,
  };

  // check required env before build
  // ignore test environment
  if (process.env.TEST === "true") {
    return variables;
  }

  ["API_HOST"].forEach((key) => {
    const value = variables[key];

    if (!value) {
      throw new Error(`Environment ${key} doesn't exist`);
    }
  });

  return variables;
};
