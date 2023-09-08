import { Router } from "express";
import { getTeams, getTeam, createTeam, deleteTeam, updateTeam } from "../controllers/teamsController";


const teamRouter = Router();


teamRouter.get('/times', getTeams)

teamRouter.get('/time/:id', getTeam);

teamRouter.post('/time', createTeam);

teamRouter.put('/time/:id', updateTeam);

teamRouter.delete('/time/:id', deleteTeam);


export {teamRouter}