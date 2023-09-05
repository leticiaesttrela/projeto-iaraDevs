import { Router } from "express";
import { createPlayer } from "../controllers/playersController";

const playerRouter = Router();


playerRouter.get('/players', (req, res) => {
        res.send('jogadores');
})

playerRouter.get('/player/:id', )

playerRouter.post('/player', createPlayer);

playerRouter.put('/player/:id',);

playerRouter.delete('/player/:id',)


export {playerRouter}