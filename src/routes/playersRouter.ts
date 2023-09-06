import { Router } from "express";
import { getPlayers, createPlayer, getPlayer, updatePlayer, deletePlayer } from "../controllers/playersController";


const playerRouter = Router();

playerRouter.get('/players', getPlayers)

playerRouter.get('/player/:id', getPlayer)

playerRouter.post('/player', createPlayer);

playerRouter.put('/player/:id', updatePlayer);

playerRouter.delete('/player/:id', deletePlayer)


export {playerRouter}