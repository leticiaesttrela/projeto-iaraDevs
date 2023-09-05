import { Router } from 'express';
import { createChampionships, deleteChampionships, getChampionships, getChampionships, updateChampionships} from "../../controllers/championshipsController";

const router = Router();

//vizualização de todos os campeonatos
router.get("/campeonatos", getChampionships);

//vizualização de um campeonato por id
router.get("/campeonato/:id", getChampionships);

//criação de um campeonato
router.post("/campeonato", createChampionships);

//atualização de um campeonato
router.put("/campeonato/:id", updateChampionships);

//exclusão de um campeonato
router.delete("/campeonato/:id", deleteChampionships);

export { router };