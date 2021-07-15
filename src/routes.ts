import express from "express";
import UserController from "./controllers/UserControllers";

const routes = express.Router();

const user = new UserController();

routes.get("/", (request, response) => {
    return response.json("It's works");
});

routes.get("/user-list", user.index);
routes.post("/user-create", user.create);
routes.put("/user-update/:pk", user.update);
routes.post("/user-delete/:pk", user.delete);

export default routes;
