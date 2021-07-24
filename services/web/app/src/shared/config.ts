function assertEnv(value: string | undefined, key: string): string {
  if (!value) {
    throw new Error(`Environment ${key} doesn't exist`);
  }

  return value;
}

export const Config = {
  dataURL: assertEnv(process.env.DATA_URL, "DATA_URL"),
  adminSecret: assertEnv(process.env.DATA_ADMIN_SECRET, "DATA_ADMIN_SECRET"),
  hasuraClientName: process.env.HASURA_CLIENT_NAME || "web",
  version: process.env.VERSION || "1.0.0",
  debug: process.env.NODE_ENV !== "production",
};
