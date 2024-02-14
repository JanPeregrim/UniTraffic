import express from "express";
import {createDefaultMap, dijkstra2} from "../utils/dijkstra2";
import {CameraRecord} from "../models/Camera";
import {knex} from "../knexfile";
import cameras from "./Cameras";
import records from "./Records";

const router = express.Router();

router.get('/', async (req, res) => {
    let startPoint: string | number = req.query.startpoint as string;
    startPoint = +startPoint;
    let endPoint: string | number = req.query.endpoint as string;
    endPoint = +endPoint;

    let map: number[][] = createDefaultMap();

    const resultDefault: number[] = dijkstra2(map, startPoint, endPoint);

    const time: {time: string} = await knex('cameras')
        .select('records.time')
        .join( 'records',{ 'records.camera_id': 'cameras.id' })
        .whereNotNull('cameras.rooms')
        .orderBy('records.time', 'desc')
        .first<{time: string}>();

    const cameras: CameraRecord[] = await knex('cameras')
        .select('cameras.rooms', 'records.number_of_people')
        .join( 'records',{ 'records.camera_id': 'cameras.id' })
        .whereNotNull('cameras.rooms')
        .where('records.time', time.time);

    cameras.forEach((camera: CameraRecord) => {
        if (camera.rooms != null) {
            const rooms: number[] = camera.rooms;
            let numOfP = camera.number_of_people;
            if (numOfP > 10 && numOfP <= 20) {
                numOfP = 2;
            }
            else if (numOfP > 20 && numOfP < 30) numOfP = 4;
            else if (numOfP < 10) numOfP = 0;


            for (let i: number = 0; i < rooms.length; i++) {

                const index: number = rooms[i];

                for (let j = 0; j < 19; j++) {
                    if (map[j][index] > 0) {
                        //hack
                        if(map[j][index] > 1) continue;
                        map[j][index] += numOfP;//camera.number_of_people;
                        map[index][j] += numOfP;
                    }
                }

            }
        }
    });

    const result: number[] = dijkstra2(map, startPoint, endPoint);
    return res.status(200).json(result);
});

export default router;