import { Router } from "express";
import { getPlayers, createPlayer, getPlayer, updatePlayer, deletePlayer } from "../controllers/playersController";
import { playerBodyValidator } from "../shared/middlewares/playerBodyValidation";

const playerRouter = Router();

playerRouter.get('/jogadores', getPlayers)

playerRouter.get('/jogador/:id', getPlayer)

playerRouter.post('/jogador', playerBodyValidator, createPlayer);

playerRouter.put('/jogador/:id', updatePlayer);

playerRouter.delete('/jogador/:id', deletePlayer)


export {playerRouter}