import {
    Request,
    Response
} from "express";

import knex from "../database/connections";

class UserController {
    async index (request: Request, response: Response) {
        const users = await knex('users').select('users.*');

        return response.json(users).status(200);

    }

    async create (request: Request, response: Response) {
        const { name, email_user, is_admin } = request.body;
        const trx = await knex.transaction();
        const userExist = await trx("users").where("email", email_user).first();

    }

}

export default UserController;
