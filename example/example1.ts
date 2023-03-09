import { documentRouter, testRouter } from "../router";
import { authProvider, emptyMiddleware } from "../middleware";
import * as express from "express";

const app = express();

const keycloak = authProvider(app)

const documentMapProtection = new Map<string, any>()
documentMapProtection.set('/', keycloak.protect('realm:user'))
documentMapProtection.set('/:id', emptyMiddleware)

const testMapProtection = new Map<string, any>()
testMapProtection.set('/', emptyMiddleware)
testMapProtection.set('/:id', emptyMiddleware)

app
  .use("/document", documentRouter(null, documentMapProtection))
  .use("/test", testRouter(null, testMapProtection));

const port: number = 8000;
app.listen(port, () => {
  console.log("http server listening ", port);
});
