function assertEnv(value: string | undefined, key: string): string {
  if (!value) {
    throw new Error(`Environment ${key} doesn't exist`);
  }

  return value;
}

export const Config = {
  apiHost: assertEnv(process.env.API_HOST, "API_HOST"),
};
