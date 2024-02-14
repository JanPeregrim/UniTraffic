import express from "express";
import {createDefaultMap, dijkstra2} from "../utils/dijkstra2";

const router = express.Router();

router.get('/', async (req, res) => {
   try {
       let startPoint: string | number = req.query.startpoint as string;
       startPoint = +startPoint;
       let endPoint: string | number = req.query.endpoint as string;
       endPoint = +endPoint;

       const map: number[][] = createDefaultMap();
       const result: number[] = dijkstra2(map, startPoint, endPoint);

       return res.status(200).json(result);
   } catch (error: any) {
       return res.status(500).json({ error: error.message });
   }
});

export default router;