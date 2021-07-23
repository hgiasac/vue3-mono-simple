import { Example } from "./model";

export const serializeExample = (item: Example): Record<string, unknown> =>
  item.get();
