import { request } from "../src/common";

describe("Request", () => {
  it("should perform GET requests", async () => {
    const res = await request<
      { userId: number; id: number; title: string; body: string },
      never
    >("https://jsonplaceholder.typicode.com/posts/1", "GET");
    expect(res.userId).toBeDefined();
    expect(res.title).toBeDefined();
    expect(res.body).toBeDefined();
    expect(res.id).toBeDefined();
  });
  it("should fail GET requests", async () => {
    try {
      await request("fodfkdjif", "GET");
    } catch (error) {
      expect(error).toBeDefined();
    }
  });

  it("should fail requests (status code >= 400)", async () => {
    try {
      await request("https://jsonplaceholder.typicode.com/posts/1", "POST");
    } catch (error) {
      expect(error).toBeDefined();
    }
  });

  it("should perform POST requests", async () => {
    const res = await request<
      { userId: number; id: number; title: string; body: string },
      any
    >("https://jsonplaceholder.typicode.com/posts", "POST", {
      title: "foo",
      body: "bar",
      userId: 1,
    });
    expect(res.userId).toBeDefined();
    expect(res.title).toBeDefined();
    expect(res.body).toBeDefined();
    expect(res.id).toBeDefined();
  });
});
