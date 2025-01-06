import express from "express";
import { fetch } from "../controller/userController.js";
import { create } from "../controller/userController.js";
import { update } from "../controller/userController.js";
import { deleteUser } from "../controller/userController.js";

const route = express.Router();
route.post("/create",create);
route.get("/getAllUsers", fetch);
route.put("/update/:id",update);
route.delete("/delete/:id",deleteUser);



export default route;

