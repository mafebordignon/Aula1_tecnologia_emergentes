import { Router } from "express";

import {
    showUser,
    listUser,
    createUser,
    editUser,
    deleteUser
  } from "../controllers/userController.js"

const router = Router()
router.get("/:_id", showUser);
router.get("/", listUser);
router.post("/", createUser);
router.put("/:_id", editUser);
router.delete("/:_id", deleteUser);

export default router;