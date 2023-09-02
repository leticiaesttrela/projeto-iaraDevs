import { Router } from "express";



const playerRouter = Router();


playerRouter.get('/players', (req, res) => {
        res.send('jogadores');
})

playerRouter.get('/player/:id', )

playerRouter.post('/player',);

playerRouter.put('/player',);

playerRouter.delete('/player/:id',)


export {playerRouter}