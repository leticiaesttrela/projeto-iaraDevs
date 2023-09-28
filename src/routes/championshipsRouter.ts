import { Router } from 'express';
import { getChampionship, getChampionships, createChampionship, updateChampionship, deleteChampionship, createTeamsByChampionship, getTeamsByChampionship} from '../controllers/championshipsController';
import { championshipBodyValidator } from '../shared/middlewares/championshipBodyValidation';

const championshipsRouter = Router();

//vizualização de todos os campeonatos
championshipsRouter.get("/campeonatos",  getChampionships);

//vizualização de um campeonato por id
championshipsRouter.get("/campeonato/:id", getChampionship);

//criação de um campeonato
championshipsRouter.post("/campeonato", championshipBodyValidator, createChampionship);

//atualização de um campeonato
championshipsRouter.put("/campeonato/:id", updateChampionship);

//exclusão de um campeonato
championshipsRouter.delete("/campeonato/:id", deleteChampionship);

championshipsRouter.post('/times-por-campeonato', createTeamsByChampionship );

championshipsRouter.get('/times-por-campeonato/:id', getTeamsByChampionship)

export { championshipsRouter };