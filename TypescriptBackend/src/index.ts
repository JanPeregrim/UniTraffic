import express, {Express, json} from 'express';
import http from "http";
import camera from "./routes/Cameras";
import records from "./routes/Records";
import dijkstra from "./routes/Dijkstra";
import shortestRoute from "./routes/ShortestRoute";
import cors from 'cors';


const app: Express = express();
const PORT: string | number = process.env.PORT || 8080;

app.use(json());
app.use(cors())

app.use('/api/cameras', camera);
app.use('/api/records', records);
app.use('/api/dijkstra', dijkstra);
app.use('/api/shortest-route', shortestRoute);

const httpServer = http.createServer(app);
httpServer.listen(PORT, () => console.log(`The server is running on port ${PORT}`));

/*
const map = createDefaultMap();
const solution: number[] = dijkstra2(map, 0, 18);
console.log("SOLUTION: " + solution);*/
