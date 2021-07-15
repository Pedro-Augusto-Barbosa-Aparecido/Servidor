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
        const { name, email_user, office, is_admin } = request.body;
        const trx = await knex.transaction();

        try {
            const user = await trx("users").insert({
                name,
                email: email_user,
                office,
                is_admin
            });
    
            await trx.commit();
    
            return response.status(200).json({
                success: `The user ${name} was create!`
            });

        } catch (err) {
            await trx.rollback();

            return response.status(400).json({
                error: err,
                message: "Error"
            });

        }

    }
    
    async update (request: Request, response: Response) {
        const { pk } = request.params;
        const user = request.body;

        const trx = await knex.transaction();

        try {

            await trx("users").update(user).where("id", pk);
            await trx.commit();

            return response.status(200).json({
                success: `User with pk ${pk} was update!`
            });
            
        } catch (error) {
            
            await trx.rollback();

            return response.status(400).json({
                err: error,
                message: "Erro"
            });

        }

    }

    async delete (request: Request, response: Response) {
        const { pk } = request.params;

        const trx = await knex.transaction();

        try {

            await trx("users").where("id", pk).del();
            await trx.commit();

            return response.status(200).json({
                success: `User with pk ${pk} was delete!`
            });

        } catch (error) {
            await trx.rollback();

            return response.status(400).json({
                err: error,
                message: "Erro"
            });

        }


    }

}

export default UserController;
