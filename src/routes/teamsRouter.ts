import { Router } from "express";
import { getTeams, getTeam, createTeam, deleteTeam, updateTeam } from "../controllers/teamsController";


const teamRouter = Router();


teamRouter.get('/teams', getTeams)

teamRouter.get('/team/:id', getTeam);

teamRouter.post('/team', createTeam);

teamRouter.put('/team/:id', updateTeam);

teamRouter.delete('/team/:id', deleteTeam);


export {teamRouter}