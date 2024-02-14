import express from "express";
import {Record} from "../models/Record";
import {knex} from "../knexfile";

const router = express.Router();

router.post('/', async (req, res) => {
   try {
       const records: Record[] = req.body;
       const time: string = new Date().toUTCString();

       if (!records) return res.status(406).json({ error: 'Invalid body' });
       records.forEach((record) => {
           if (!record.hasOwnProperty('camera_id') && !record.camera_id ||
               !record.hasOwnProperty('number_of_people') && !record.number_of_people) {
               return res.status(406).json({ error: 'Invalid body' });
           }
           record.time = time;
       });

       await knex('records').insert(records);

       return res.status(200).json('Successful operation');
   } catch (error: any) {
       return res.status(500).json({ error: error.message });
   }
});

router.get('/', async (req, res) => {
    try {
        const time: {time: string} = await knex('cameras')
            .select('records.time')
            .join( 'records',{ 'records.camera_id': 'cameras.id' })
            .whereNotNull('cameras.rooms')
            .orderBy('records.time', 'desc')
            .first<{time: string}>();

        const density = await knex('cameras')
            .select('cameras.place', 'records.number_of_people', 'records.id')
            .join( 'records',{ 'records.camera_id': 'cameras.id' })
            .whereNotNull('cameras.rooms')
            .where('records.time', time.time);

        await knex('records')
            .del()
            .where('time', time.time);

        return res.status(200).json(density);
    } catch (error: any) {
        return res.status(500).json({ error: error.message });
    }
})

export default router;