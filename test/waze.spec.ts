import { WazeAPI } from "../src";

describe("Waze API Info", () => {
  const waze = new WazeAPI();
  it("should get full info", async () => {
    const res = await waze.getInfo(10.997265, -74.814256);
    expect(res.endTime).toBeDefined();
    expect(res.startTime).toBeDefined();
    expect(res.endTimeMillis).toBeDefined();
    expect(res.startTimeMillis).toBeDefined();
    expect(res.alerts!).toBeDefined();
    expect(res.alerts!).toBeInstanceOf(Array);
    expect(res.alerts!.length).toBeGreaterThan(0);
    expect(res.jams!).toBeDefined();
    expect(res.jams!).toBeInstanceOf(Array);
    expect(res.jams!.length).toBeGreaterThan(0);
    expect(res.users!).toBeDefined();
    expect(res.users!).toBeInstanceOf(Array);
    expect(res.users!.length).toBeGreaterThan(0);
  });
  it("should hide traffic", async () => {
    const res = await waze.getInfo(10.997265, -74.814256, {
      hideTraffic: true,
    });
    expect(res.endTime).toBeDefined();
    expect(res.startTime).toBeDefined();
    expect(res.endTimeMillis).toBeDefined();
    expect(res.startTimeMillis).toBeDefined();
    expect(res.alerts!).toBeDefined();
    expect(res.alerts!).toBeInstanceOf(Array);
    expect(res.alerts!.length).toBeGreaterThan(0);
    expect(res.users!).toBeDefined();
    expect(res.users!).toBeInstanceOf(Array);
    expect(res.users!.length).toBeGreaterThan(0);
    expect(res.jams!).toBeUndefined();
  });
  it("should hide traffic and users", async () => {
    const res = await waze.getInfo(10.997265, -74.814256, {
      hideTraffic: true,
      hideUsers: true,
    });
    expect(res.endTime).toBeDefined();
    expect(res.startTime).toBeDefined();
    expect(res.endTimeMillis).toBeDefined();
    expect(res.startTimeMillis).toBeDefined();
    expect(res.alerts!).toBeDefined();
    expect(res.alerts!).toBeInstanceOf(Array);
    expect(res.alerts!.length).toBeGreaterThan(0);
    expect(res.jams!).toBeUndefined();
    expect(res.users!).toBeUndefined();
  });
  it("should hide all info", async () => {
    const res = await waze.getInfo(10.997265, -74.814256, {
      hideAlerts: true,
      hideTraffic: true,
      hideUsers: true,
    });
    expect(res.endTime).toBeDefined();
    expect(res.startTime).toBeDefined();
    expect(res.endTimeMillis).toBeDefined();
    expect(res.startTimeMillis).toBeDefined();
    expect(res.alerts!).toBeUndefined();
    expect(res.jams!).toBeUndefined();
    expect(res.users!).toBeUndefined();
  });
});

describe("Waze API Paths", () => {
  const waze = new WazeAPI();
  it("should get paths", async () => {
    const res = await waze.getPaths({
      from: { y: 10.997265, x: -74.814256 },
      to: { y: 10.993805, x: -74.808798 },
      nPaths: 3,
      useCase: "LIVEMAP_PLANNING",
      interval: 15,
      arriveAt: true,
    });
    expect(res.alternatives).toBeDefined();
    expect(res.alternatives).toBeInstanceOf(Array);
    expect(res.alternatives.length).toBeGreaterThan(0);
    expect(res.alternatives[0].coords).toBeInstanceOf(Array);
    expect(res.alternatives[0].coords.length).toBeGreaterThan(0);
    expect(res.alternatives[0].response).toBeDefined();
  });
  it("should fail getting paths", async () => {
    try {
      await waze.getPaths("" as any);
    } catch (error) {
      expect(error).toBeDefined();
    }
  });
});
