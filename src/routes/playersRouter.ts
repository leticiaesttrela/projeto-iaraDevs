import { Router } from "express";
import { getPlayers, createPlayer, getPlayer, updatePlayer, deletePlayer, getPlayersByTeam } from "../controllers/playersController";
import { playerBodyValidator } from "../shared/middlewares/playerBodyValidation";

const playerRouter = Router();

playerRouter.get('/jogadores', getPlayers)

playerRouter.get('/jogador/:id', getPlayer)

playerRouter.post('/jogador', playerBodyValidator, createPlayer);

playerRouter.put('/jogador/:id', updatePlayer);

playerRouter.delete('/jogador/:id', deletePlayer);

playerRouter.get('/jogadores-por-time/:id', getPlayersByTeam);


export {playerRouter}