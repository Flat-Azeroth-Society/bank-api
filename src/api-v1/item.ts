import { getItem } from "../db/test/testdb";
import express from "express";

const itemsRouter = express.Router();

itemsRouter.get("/:itemId", async (req, res) => {
  if (!!req.params["itemId"])
    res.send(await getItem({ id: req.params["itemId"] }));
  else res.status(400).send("No item ID");
});

export default itemsRouter;
