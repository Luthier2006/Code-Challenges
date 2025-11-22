import express from "express";
import challenges from "../data/challenges.json" assert { type: "json" };

const router = express.Router();

router.get("/", (req, res) => {
  res.json(challenges);
});

router.get("/:id", (req, res) => {
  const id = Number(req.params.id);
  const challenge = challenges.find(c => c.id === id);
  res.json(challenge || {});
});

export default router;
