import { Router } from "express";

const testRouter = (middlewares, testMapProtection) => {
  const router: Router = Router();

  if (middlewares) {
    router.use(middlewares);
  }

  router
    .get("/", testMapProtection.get('/'), (req, res) => {
      res.send("coucou from main test route");
    })
    .get("/:id", testMapProtection.get('/:id'), (req, res) => {
      console.log("id ", req.params.id);
      res.send("coucou from test route id with " + req.params.id);
    });

  return router;
};

export { testRouter };
