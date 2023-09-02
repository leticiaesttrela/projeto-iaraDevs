import { server} from "./server/Server";
import { playerRouter } from "./server/routes/playersRoutes";



server.listen(3333, () => {
    console.log('Servidor rodando na porta 3333');
})

server.use(playerRouter);