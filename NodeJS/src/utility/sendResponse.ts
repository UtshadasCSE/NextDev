import { ServerResponse } from "http";

export const sendResponse = (
  res: ServerResponse,
  statusCode: number,
  message: string,
  data: unknown = null,
) => {
  res.writeHead(statusCode, {
    "content-type": "application/json",
  });

  res.end(
    JSON.stringify({
      success: statusCode < 400,
      message,
      data,
    }),
  );
};
