import https from "https";

export const request = <T, U extends object>(
  url: string,
  method: "POST" | "GET",
  data?: U
) => {
  const data_ = data ? JSON.stringify(data) : "";

  let raw = "";
  return new Promise<T>((resolve, reject) => {
    const req = https.request(
      url,
      {
        method,
        port: 443,
        headers: {
          "Content-Length": Buffer.byteLength(data_, "utf-8"),
          "Content-Type": "application/json",
        },
      },
      (res) => {
        if (res.statusCode && res.statusCode >= 400) {
          reject(new Error(`Request fail with status code ${res.statusCode}`));
        }
        res.on("data", (d) => {
          raw += d.toString();
        });
      }
    );
    if (method === "POST") req.write(data_);
    /* istanbul ignore next */
    req.on("error", (e) => {
      reject(e);
    });
    req.on("close", () => {
      resolve(JSON.parse(raw));
    });
    req.end();
  });
};
