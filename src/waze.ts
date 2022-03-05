import {
  request,
  generateParams,
  WazeInfoOptions,
  WazeInfoResponse,
  WazePathsOptions,
  WazePathsResponse,
  stringifyQueryParams,
} from "./common";

export class WazeAPI {
  private infoUrl = "https://www.waze.com/row-rtserver/web/TGeoRSS";
  private pathsUrl = "https://www.waze.com/live-map/api/user-drive?geo_env=row";

  private base_(lat: number, lng: number, opts?: WazeInfoOptions) {
    const deltaV = lat * 0.012;
    const deltaH = lng * 0.0016;
    return `${this.infoUrl}?bottom=${lat - deltaV}&left=${
      lng + deltaH
    }&ma=200&mj=200&mu=20&right=${lng - deltaH}&top=${
      lat + deltaV
    }&${stringifyQueryParams(
      generateParams(
        opts || { hideAlerts: false, hideTraffic: false, hideUsers: false }
      )
    )}`;
  }

  public getInfo(lat: number, lng: number, options?: WazeInfoOptions) {
    return request<WazeInfoResponse, never>(
      this.base_(lat, lng, options),
      "GET"
    );
  }

  public getPaths(options: WazePathsOptions) {
    if (!options || typeof options !== "object")
      throw new Error("Please provide valid options.");
    return request<WazePathsResponse, WazePathsOptions>(
      this.pathsUrl,
      "POST",
      options
    );
  }
}
