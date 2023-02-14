import { Router } from "express";

const testRouter = (middlewares) => {
  const router: Router = Router();

  if (middlewares) {
    router.use(middlewares);
  }

  router
    .get("/", (req, res) => {
      res.send("coucou from main test route");
    })
    .get("/:id", (req, res) => {
      console.log("id ", req.params.id);
      res.send("coucou from test route id with " + req.params.id);
    });

  return router;
};

export { testRouter };
