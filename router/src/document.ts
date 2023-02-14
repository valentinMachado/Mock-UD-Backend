import { Router } from "express";

const documentRouter = (middlewares) => {
  const router: Router = Router();

  if (middlewares) {
    router.use(middlewares);
  }

  router
    .get("/", (req, res) => {
      res.send("coucou from main document route");
    })
    .get("/:id", (req, res) => {
      console.log("id ", req.params.id);
      res.send("coucou from document route id with " + req.params.id);
    });

  return router;
};

export { documentRouter };
