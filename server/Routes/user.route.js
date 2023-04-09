import express from "express";
import {deleteUser} from "../Controllers/user.controller";
import { verifyToken } from "../Middleware/jwt";

const router = express.Router();

router.delete("/:id", verifyToken, deleteUser);

export default router;