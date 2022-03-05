import { generateParams, stringifyQueryParams } from "../src/common";

describe("Generate Params", () => {
  it("should generate params (3)", () => {
    const res = generateParams({
      hideAlerts: false,
      hideTraffic: false,
      hideUsers: false,
    });
    expect(res).toEqual(["alerts", "users", "traffic"]);
  });
  it("should generate params (2)", () => {
    const res = generateParams({
      hideAlerts: false,
      hideTraffic: false,
      hideUsers: true,
    });
    expect(res).toEqual(["alerts", "traffic"]);
  });
  it("should generate params (1)", () => {
    const res = generateParams({
      hideAlerts: false,
      hideTraffic: true,
      hideUsers: true,
    });
    expect(res).toEqual(["alerts"]);
  });
  it("should generate params (0)", () => {
    const res = generateParams({
      hideAlerts: true,
      hideTraffic: true,
      hideUsers: true,
    });
    expect(res).toEqual([]);
  });
});

describe("Stringify Query Params", () => {
  it("should stringify params", () => {
    const res = stringifyQueryParams(["alerts", "traffic", "users"]);
    expect(res).toBe("types=alerts%2Ctraffic%2Cusers");
  });
});
