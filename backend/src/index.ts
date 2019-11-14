import express, {NextFunction, Request, Response} from 'express';
import {activePlayers} from "./models";

const app = express();

app.use(express.json());

app.get('/characters', (req: Request, res: Response, next: NextFunction) => {
    res.status(200).send(activePlayers);
});

app.listen(3000, () => {
    console.log("Listening on http://localhost:3000");
});