import { Router } from "express";
import { getTeams, getTeam, createTeam, deleteTeam, updateTeam } from "../controllers/teamsController";
import { teamBodyValidator } from "../shared/middlewares/teamBodyValidation";


const teamRouter = Router();


teamRouter.get('/times', getTeams)

teamRouter.get('/time/:id', getTeam);

teamRouter.post('/time', teamBodyValidator, createTeam);

teamRouter.put('/time/:id', updateTeam);

teamRouter.delete('/time/:id', deleteTeam);


export {teamRouter}