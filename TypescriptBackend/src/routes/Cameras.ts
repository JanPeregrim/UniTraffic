import express from "express";
import {Camera} from "../models/Camera";
import {knex} from "../knexfile";

const router = express.Router();

router.post('/', async (req, res) => {
    try {
        const camera: Camera = req.body;

        if (!camera.hasOwnProperty('place') && !camera.place ||
            !camera.hasOwnProperty('type') && !camera.type ||
            !camera.hasOwnProperty('rooms') && !camera.rooms) {
            return res.status(406).json({ error: 'Invalid body' });
        }

        await knex('cameras').insert(camera);

        return res.status(200).json('Successful operation');
    } catch (error: any) {
        return res.status(500).json({ error: error.message });
    }
});

export default router;