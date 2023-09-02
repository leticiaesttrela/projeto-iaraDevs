import { Router } from "express";



const playerRouter = Router();


playerRouter.get('/players', (req, res) => {
        res.send('jogadores');
})


export {playerRouter}