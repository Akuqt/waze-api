import { WazeInfoOptions } from "./types";
import { stringify } from "querystring";

export const generateParams = (opts: WazeInfoOptions) => {
  const res: string[] = [];
  if (!opts.hideAlerts) res.push("alerts");
  if (!opts.hideUsers) res.push("users");
  if (!opts.hideTraffic) res.push("traffic");
  return res;
};

export const stringifyQueryParams = (types: string[]) => {
  return stringify({ types: types.join(",") });
};
