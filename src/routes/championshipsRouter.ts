import { Router } from 'express';
import { getChampionship, getChampionships, createChampionship, updateChampionship, deleteChampionship  } from '../controllers/championshipsController';

const championshipsRouter = Router();

//vizualização de todos os campeonatos
championshipsRouter.get("/campeonatos", getChampionships);

//vizualização de um campeonato por id
championshipsRouter.get("/campeonato/:id", getChampionship);

//criação de um campeonato
championshipsRouter.post("/campeonato", createChampionship);

//atualização de um campeonato
championshipsRouter.put("/campeonato/:id", updateChampionship);

//exclusão de um campeonato
championshipsRouter.delete("/campeonato/:id", deleteChampionship);

export { championshipsRouter };