function assertEnv(value: string | undefined, key: string): string {
  if (!value) {
    throw new Error(`Environment ${key} doesn't exist`);
  }

  return value;
}

export const Config = {
  databaseUrl: assertEnv(process.env.DATABASE_URL, "DATABASE_URL"),
};
