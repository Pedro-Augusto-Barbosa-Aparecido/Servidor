import express from "express";
import UserController from "./controllers/UserControllers";

const routes = express.Router();

const user = new UserController();

routes.get("/", (request, response) => {
    return response.json("It's works");
});

routes.get("/user-list", user.index);

export default routes;
