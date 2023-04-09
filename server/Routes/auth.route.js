import express from "express";

const router = express.Router();

router.post("/register", register)
router.post("/login", login)
router.post("/login", logout)

export default router;