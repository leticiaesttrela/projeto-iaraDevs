import { Router } from "express";
import { createChampionship, updateChampionship, getChampionship, getChampionships, deleteChampionship } 
from "../../../controllers/championshipsController";



const championshipRouter = Router();


championshipRouter.get('/championships', getChampionships)

championshipRouter.get('/championship/:id', getChampionship )

championshipRouter.post('/championship', createChampionship);

championshipRouter.put('/championship/:id', updateChampionship);

championshipRouter.delete('/championship/:id', deleteChampionship);


export {championshipRouter}