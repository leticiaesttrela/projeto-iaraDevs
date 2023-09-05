import { Router } from "express";



const teamRouter = Router();


teamRouter.get('/teams', (req, res) => {
        res.send('jogadores');
})

teamRouter.get('/team/:id', )

teamRouter.post('/team',);

teamRouter.put('/team/:id',);

teamRouter.delete('/team/:id',)


export {teamRouter}