import { documentRouter, testRouter } from "../router";
import { authMiddleware } from "../middleware";
import * as express from "express";

const app = express();

app
  .use("/document", documentRouter(authMiddleware))
  .use("/test", testRouter(null));

const port: number = 8000;
app.listen(port, () => {
  console.log("http server listening ", port);
});
