import { Router } from "express";



const championshipRouter = Router();


championshipRouter.get('/championships', (req, res) => {
        res.send('jogadores');
})

championshipRouter.get('/championship/:id', )

championshipRouter.post('/championship',);

championshipRouter.put('/championship/:id',);

championshipRouter.delete('/championship/:id',)


export {championshipRouter}