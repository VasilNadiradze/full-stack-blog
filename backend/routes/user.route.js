import express from "express";

const router = express.Router();

router.get("/test2", (req, res) => {
    res.status(200).send("888888")
})

export default router;