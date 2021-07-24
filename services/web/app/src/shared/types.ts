export const XHasuraClientName = "hasura-client-name";
export const XHasuraAdminSecret = "x-hasura-admin-secret";
export const ADMIN = "Admin";
export const USER = "User";

export type AppPermission = typeof ADMIN | typeof USER;

export const PERMISSIONS: AppPermission[] = [ADMIN, USER];
